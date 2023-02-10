import React, { useState } from "react";
import "./App.css";
import LevelMenu from "./LevelMenu";
import Keyboard from "./Keyboard";

const App: React.FC = () => {
    const [textSource, setTextSource] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
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
        <LevelMenu />
            {/* <div id="text-zone">
                <div id="text-source">{textSource}</div>
                <textarea
                    id="text-input"
                    disabled={finished ? true : false}
                    spellCheck={false}
                    value={textInput}
                    onChange={(event) => handleChange(event)}
                />
            </div>
            <Keyboard currentKey={textSource[textInput.length]} /> */}
        </>
    );
}

export default App;
