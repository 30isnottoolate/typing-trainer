import React, { useState, useEffect } from "react";
import "./App.css";
import LevelMenu from "./LevelMenu";
import Keyboard from "./Keyboard";
import YesNoBox from "./YesNoBox";
import FinishBox from "./FinishBox";

import wordBank from "../utilities/wordBank";

const App: React.FC = () => {
    const [textSource, setTextSource] = useState("");
    const [textInput, setTextInput] = useState("");
    const [errorCount, setErrorCount] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    const [startingTime, setStartingTime] = useState(0);
    const [finished, setFinished] = useState(false);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [appStatus, setAppStatus] = useState("training"); //menu, training, paused, finished

    useEffect(() => {
        if (currentLevel > 0) {
            let currentWords = wordBank[currentLevel - 1];
            let textCollector = currentWords[Math.floor(Math.random() * currentWords.length)];

            do {
                let randomIndex = Math.floor(Math.random() * currentWords.length);
                textCollector = `${textCollector} ${currentWords[randomIndex]}`;
            }
            while (textCollector.length < 1000);

            setTextSource(textCollector);
        }
    }, [currentLevel]);

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

    const textInputClass = () => {
        return textInput !== textSource.slice(0, textInput.length) ? "typo" : "";
    }

    return (
        <>
            {appStatus === "menu" &&
                <LevelMenu
                    setCurrentLevel={setCurrentLevel}
                />
            }
            {appStatus === "training" &&
                <>
                    <div id="text-source">{textSource}</div>
                    <textarea
                        id="text-input"
                        className={textInputClass()}
                        disabled={finished ? true : false}
                        spellCheck={false}
                        value={textInput}
                        onChange={(event) => handleChange(event)}
                    />
                    <Keyboard currentKey={textSource[textInput.length]} />
                </>
            }
            {appStatus === "paused" &&
                <YesNoBox />
            }
            {appStatus === "finished" &&
                <FinishBox
                    finishTime={60}
                    finishAccurary={100}
                    finishSpeed={200}
                    success={true}
                />
            }
        </>
    );
}

export default App;
