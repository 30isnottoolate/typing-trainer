import React, { useState } from "react";
import "./App.css";

const FIRST_ROW = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "", "", ""];
const SECOND_ROW = ["", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "", "", ""];
const THIRD_ROW = ["", "a", "s", "d", "f", "g", "h", "j", "k", "l", "", "", ""];
const FOURTH_ROW = ["", "z", "x", "c", "v", "b", "n", "m", ",", ".", "", ""];
const FIFTH_ROW = ["", "", "", " ", "", "", "", ""];

const COLUMN_CLASSES = ["", "first", "second", "third", "fourth", "fourth", "first", "first", "second", "third", "fourth"];

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
                    {FIRST_ROW.map((item, index) =>
                        <div
                            key={index}
                            className={`${item === "" ? "blank-key" : "key"}${item !== "" ? ` ${COLUMN_CLASSES[index]}-column` : ""}`}
                            style={{ opacity: `${textSource[textInput.length] && textSource[textInput.length].toLocaleLowerCase() === item ? 1 : 0.5}` }} >
                            {item.toUpperCase()}
                        </div>
                    )}
                </div>
                <div className="second-row">
                    {SECOND_ROW.map((item, index) =>
                        <div
                            key={index}
                            className={`${item === "" ? "blank-key" : "key"}${item !== "" ? ` ${COLUMN_CLASSES[index]}-column` : ""}`}
                            style={{ opacity: `${textSource[textInput.length] && textSource[textInput.length].toLocaleLowerCase() === item ? 1 : 0.5}` }} >
                            {item.toUpperCase()}
                        </div>
                    )}
                </div>
                <div className="third-row">
                    {THIRD_ROW.map((item, index) =>
                        <div
                            key={index}
                            className={`${item === "" ? "blank-key" : "key"}${item !== "" ? ` ${COLUMN_CLASSES[index]}-column` : ""}`}
                            style={{ opacity: `${textSource[textInput.length] && textSource[textInput.length].toLocaleLowerCase() === item ? 1 : 0.5}` }} >
                            {item.toUpperCase()}
                        </div>
                    )}
                </div>
                <div className="fourth-row">
                    {FOURTH_ROW.map((item, index) =>
                        <div
                            key={index}
                            className={`${item === "" ? "blank-key" : "key"}${item !== "" ? ` ${COLUMN_CLASSES[index]}-column` : ""}`}
                            style={{ opacity: `${textSource[textInput.length] && textSource[textInput.length].toLocaleLowerCase() === item ? 1 : 0.5}` }} >
                            {item.toUpperCase()}
                        </div>
                    )}
                </div>
                <div className="fifth-row">
                    {FIFTH_ROW.map((item, index) =>
                        <div
                            key={index}
                            id={item === " " ? "space" : ""}
                            className={`${item === "" ? "blank-key" : ""}`}
                            style={{ opacity: `${textSource[textInput.length] && textSource[textInput.length].toLocaleLowerCase() === item ? 1 : 0.5}` }} >
                            {item.toUpperCase()}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
