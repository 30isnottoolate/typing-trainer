import React, { useState } from "react";
import "./App.css";

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
                    <div></div>
                    <div id="1" className="key">1</div>
                    <div id="2" className="key">2</div>
                    <div id="3" className="key">3</div>
                    <div id="4" className="key">4</div>
                    <div id="5" className="key">5</div>
                    <div id="6" className="key">6</div>
                    <div id="7" className="key">7</div>
                    <div id="8" className="key">8</div>
                    <div id="9" className="key">9</div>
                    <div id="0" className="key">0</div>
                </div>
                <div className="second-row">
                    <div></div>
                    <div id="q" className="key">Q</div>
                    <div id="w" className="key">W</div>
                    <div id="e" className="key">E</div>
                    <div id="r" className="key">R</div>
                    <div id="t" className="key">T</div>
                    <div id="y" className="key">Y</div>
                    <div id="u" className="key">U</div>
                    <div id="i" className="key">I</div>
                    <div id="o" className="key">O</div>
                    <div id="p" className="key">P</div>
                </div>
                <div className="third-row">
                    <div></div>
                    <div id="a" className="key">A</div>
                    <div id="s" className="key">S</div>
                    <div id="d" className="key">D</div>
                    <div id="f" className="key">F</div>
                    <div id="g" className="key">G</div>
                    <div id="h" className="key">H</div>
                    <div id="j" className="key">J</div>
                    <div id="k" className="key">K</div>
                    <div id="l" className="key">L</div>
                </div>
                <div className="fourth-row">
                    <div></div>
                    <div id="z" className="key">Z</div>
                    <div id="x" className="key">X</div>
                    <div id="c" className="key">C</div>
                    <div id="v" className="key">V</div>
                    <div id="b" className="key">B</div>
                    <div id="n" className="key">N</div>
                    <div id="m" className="key">M</div>
                </div>
                <div className="fifth-row">
                    <div></div>
                    <div id="space">SPACE</div>
                </div>
            </div>
        </div>
    );
}

export default App;
