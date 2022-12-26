import React, { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
    const [textSource, setTextSource] = useState("Some text.");
    const [textInput, setTextInput] = useState("");
    const [errorCount, setErrorCount] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    const [startingTime, setStartingTime] = useState(0);
    const [finished, setFinished] = useState(false);
    const [currentChar, setCurrentChar] = useState("");

    useEffect(() => {
        setCurrentChar(textSource[0]);
    }, [])

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
                console.log(`Speed: ${(textSource.length * 60000 / (Date.now() - startingTime)).toFixed(2)} chars/min`)
                setTimerActive(false);
                setFinished(true);
            }
        }
    }

    return (
        <>
            <div id="text-zone">
                <div id="text-source">{textSource}</div>
                <textarea
                    id="text-input"
                    disabled={finished ? true : false}
                    value={textInput}
                    onChange={(event) => handleChange(event)}
                />
            </div>
            <div id="keyboard">
                <div className="first-row">
                    <div className="blank-key"></div>
                    <div id="1" className="key first-column">1</div>
                    <div id="2" className="key second-column">2</div>
                    <div id="3" className="key third-column">3</div>
                    <div id="4" className="key fourth-column">4</div>
                    <div id="5" className="key fourth-column">5</div>
                    <div id="6" className="key first-column">6</div>
                    <div id="7" className="key first-column">7</div>
                    <div id="8" className="key second-column">8</div>
                    <div id="9" className="key third-column">9</div>
                    <div id="0" className="key fourth-column">0</div>
                    <div className="blank-key"></div>
                    <div className="blank-key"></div>
                    <div className="blank-key"></div>
                </div>
                <div className="second-row">
                    <div className="blank-key"></div>
                    <div id="q" className="key first-column">Q</div>
                    <div id="w" className="key second-column">W</div>
                    <div id="e" className="key third-column">E</div>
                    <div id="r" className="key fourth-column">R</div>
                    <div id="t" className="key fourth-column">T</div>
                    <div id="y" className="key first-column">Y</div>
                    <div id="u" className="key first-column">U</div>
                    <div id="i" className="key second-column">I</div>
                    <div id="o" className="key third-column">O</div>
                    <div id="p" className="key fourth-column">P</div>
                    <div className="blank-key"></div>
                    <div className="blank-key"></div>
                    <div className="blank-key"></div>
                </div>
                <div className="third-row">
                    <div className="blank-key"></div>
                    <div id="a" className="key first-column">A</div>
                    <div id="s" className="key second-column">S</div>
                    <div id="d" className="key third-column">D</div>
                    <div id="f" className="key fourth-column">F</div>
                    <div id="g" className="key fourth-column">G</div>
                    <div id="h" className="key first-column">H</div>
                    <div id="j" className="key first-column">J</div>
                    <div id="k" className="key second-column">K</div>
                    <div id="l" className="key third-column">L</div>
                    <div className="blank-key"></div>
                    <div className="blank-key"></div>
                    <div className="blank-key"></div>
                </div>
                <div className="fourth-row">
                    <div className="blank-key"></div>
                    <div id="z" className="key first-column">Z</div>
                    <div id="x" className="key second-column">X</div>
                    <div id="c" className="key third-column">C</div>
                    <div id="v" className="key fourth-column">V</div>
                    <div id="b" className="key fourth-column">B</div>
                    <div id="n" className="key first-column">N</div>
                    <div id="m" className="key first-column">M</div>
                    <div className="blank-key"></div>
                    <div className="blank-key"></div>
                    <div className="blank-key"></div>
                    <div className="blank-key"></div>
                </div>
                <div className="fifth-row">
                    <div className="blank-key"></div>
                    <div className="blank-key"></div>
                    <div className="blank-key"></div>
                    <div id="space"></div>
                    <div className="blank-key"></div>
                    <div className="blank-key"></div>
                    <div className="blank-key"></div>
                    <div className="blank-key"></div>
                </div>
            </div>
        </>
    );
}

export default App;
