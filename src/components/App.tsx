import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import LevelMenu from "./LevelMenu";
import Trainer from "./Trainer";

import wordBank from "../utilities/wordBank";

const App: React.FC = () => {
    const [textInput, setTextInput] = useState("");
    const [currentLevel, setCurrentLevel] = useState(1);
    const [appStatus, setAppStatus] = useState("menu"); //menu, training, paused, finished
    const [progressionScore, setProgressionScore] = useState({ accuracy: 95, speed: 180 });

    /* useEffect(() => {
        if (currentLevel > 0) {
            let currentWords = wordBank[currentLevel - 1];
            let textCollector = "";

            for (let numberOfLines = 0; numberOfLines < 3; numberOfLines++) {
                let lineCollector = "";
                let isLineFull = false;

                do {
                    let randomIndex = Math.floor(Math.random() * currentWords.length);
                    let randomWord = currentWords[randomIndex];

                    if ((lineCollector + randomWord).length < 66) {
                        lineCollector = `${lineCollector} ${randomWord}`;
                    } else {
                        textCollector = `${textCollector}\n${lineCollector.trim()}`;
                        isLineFull = true;
                    }
                }
                while (!isLineFull);
            }

            setTextSource(textCollector.trim());
        }
    }, [currentLevel]); */

    /* useEffect(() => {
        if (appStatus === "training" && textAreaRef.current) textAreaRef.current.focus();
    }, [appStatus]) */

    return (
        <>
            {appStatus === "menu" &&
                <LevelMenu
                    setCurrentLevel={setCurrentLevel}
                    setAppStatus={setAppStatus}
                    progressionScore={progressionScore}
                    setProgressionScore={setProgressionScore}
                />
            }
            {appStatus === "training" &&
                <Trainer
                    textInput={textInput}
                    currentLevel={currentLevel}
                    setCurrentLevel={setCurrentLevel}
                    appStatus={appStatus}
                    setAppStatus={setAppStatus}
                    setTextInput={setTextInput}
                />
            }
        </>
    );
}

export default App;
