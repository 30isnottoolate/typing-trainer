import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import LevelMenu from "./LevelMenu";
import Trainer from "./Trainer";
import YesNoBox from "./YesNoBox";
import FinishBox from "./FinishBox";

import wordBank from "../utilities/wordBank";

const App: React.FC = () => {
    const [textSource, setTextSource] = useState("");
    const [textInput, setTextInput] = useState("");
    const [errorCount, setErrorCount] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    const [startingTime, setStartingTime] = useState(0);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [appStatus, setAppStatus] = useState("menu"); //menu, training, paused, finished
    const [score, setScore] = useState({ time: 0, accuracy: 0, speed: 0, success: false });
    const [progressionScore, setProgressionScore] = useState({ accuracy: 95, speed: 180 });

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
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
    }, [currentLevel]);

    useEffect(() => {
        if (appStatus === "training" && textAreaRef.current) textAreaRef.current.focus();
    }, [appStatus])

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

                setScore({
                    time: Math.round((Date.now() - startingTime) / 1000),
                    accuracy: Number((100 - errorCount / textSource.length * 100).toFixed(2)),
                    speed: Number((textSource.length * 60000 / (Date.now() - startingTime)).toFixed(0)),
                    success: true
                });
                setAppStatus("finished");
                setTimerActive(false);
            }
        }
    }

    const textSourceClass = textInput !== textSource.slice(0, textInput.length) ? "typo" : "";

    const currentKey = textSource[textInput.length] === `\n` ? "return"
        : textInput !== textSource.slice(0, textInput.length) ? "backsp."
            : textSource[textInput.length];

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
                    textSourceClass={textSourceClass}
                    textSource={textSource}
                    textAreaRef={textAreaRef}
                    textInput={textInput}
                    handleChange={handleChange}
                    currentKey={currentKey}
                />
            }
            {appStatus === "paused" &&
                <YesNoBox />
            }
            {appStatus === "finished" &&
                <FinishBox
                    finishTime={score.time}
                    finishAccurary={score.accuracy}
                    finishSpeed={score.speed}
                    success={score.success}
                    setCurrentLevel={setCurrentLevel}
                    setAppStatus={setAppStatus}
                />
            }
        </>
    );
}

export default App;
