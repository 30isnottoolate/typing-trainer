import React, { useState } from "react";

const App: React.FC = () => {
    const [textSource, setTextSource] = useState("Some text.");
    const [textInput, setTextInput] = useState("");
    const [errorCount, setErrorCount] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    const [startingTime, setStartingTime] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target) {
            setTextInput(event.currentTarget.value);

            if (!timerActive) {
                setTimerActive(true);
                setStartingTime(Date.now());
            }

            if (event.currentTarget.value !== textSource.slice(0, event.currentTarget.value.length)) {
                setErrorCount(prevState => prevState + 1);
            } else if (event.currentTarget.value === textSource) {
                console.log("Done. Number of errors: " + errorCount);
                console.log(`Accuray: ${(100 - errorCount / textSource.length * 100)}%`);
                console.log(`Time: ${Date.now() - startingTime}`);
                setTimerActive(false);
                setFinished(true);
            }
        }
    }

    return (
        <div>
            <div id="text-source">{textSource}</div>
            <textarea
                id="text-input"
                disabled={finished ? true : false}
                value={textInput}
                onChange={(event) => handleChange(event)}
            />
            <div id="keyboard">
                <div className="first-row">
                    <div id="1">1</div>
                    <div id="2">2</div>
                    <div id="3">3</div>
                    <div id="4">4</div>
                    <div id="5">5</div>
                    <div id="6">6</div>
                    <div id="7">7</div>
                    <div id="8">8</div>
                    <div id="9">9</div>
                    <div id="0">0</div>
                </div>
                <div className="second-row">
                    <div id="q">Q</div>
                    <div id="w">W</div>
                    <div id="e">E</div>
                    <div id="r">R</div>
                    <div id="t">T</div>
                    <div id="y">Y</div>
                    <div id="u">U</div>
                    <div id="i">I</div>
                    <div id="o">O</div>
                    <div id="p">P</div>
                </div>
                <div className="third-row">
                    <div id="a">A</div>
                    <div id="s">S</div>
                    <div id="d">D</div>
                    <div id="f">F</div>
                    <div id="g">G</div>
                    <div id="h">H</div>
                    <div id="j">J</div>
                    <div id="k">K</div>
                    <div id="l">L</div>
                </div>
                <div className="forth-row">
                    <div id="z">Z</div>
                    <div id="x">X</div>
                    <div id="c">C</div>
                    <div id="v">V</div>
                    <div id="b">B</div>
                    <div id="n">N</div>
                    <div id="m">M</div>
                </div>
                <div className="fifth-row">
                    <div id="space"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
