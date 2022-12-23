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
                    <div id="1"></div>
                    <div id="2"></div>
                    <div id="3"></div>
                    <div id="4"></div>
                    <div id="5"></div>
                    <div id="6"></div>
                    <div id="7"></div>
                    <div id="8"></div>
                    <div id="9"></div>
                    <div id="0"></div>
                </div>
                <div className="second-row">
                    <div id="q"></div>
                    <div id="w"></div>
                    <div id="e"></div>
                    <div id="r"></div>
                    <div id="t"></div>
                    <div id="y"></div>
                    <div id="u"></div>
                    <div id="i"></div>
                    <div id="o"></div>
                    <div id="p"></div>
                </div>
                <div className="third-row">
                    <div id="a"></div>
                    <div id="s"></div>
                    <div id="d"></div>
                    <div id="f"></div>
                    <div id="g"></div>
                    <div id="h"></div>
                    <div id="j"></div>
                    <div id="k"></div>
                    <div id="l"></div>
                </div>
                <div className="forth-row">
                    <div id="z"></div>
                    <div id="x"></div>
                    <div id="c"></div>
                    <div id="v"></div>
                    <div id="b"></div>
                    <div id="n"></div>
                    <div id="m"></div>
                </div>
                <div className="fifth-row">
                    <div id="space"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
