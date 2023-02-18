import React, { useState, useRef, useEffect } from "react";

import wordBank from "../utilities/wordBank";
import textGenerator from "../utilities/textGenerator";

import Keyboard from "./Keyboard";
import YesNoBox from "./YesNoBox";
import FinishBox from "./FinishBox";

interface TrainerProps {
    currentLevel: number;
    setCurrentLevel: React.Dispatch<React.SetStateAction<number>>;
    appStatus: string;
    setAppStatus: React.Dispatch<React.SetStateAction<string>>;
    progressionScore: { accuracy: number, speed: number };
}

const Trainer: React.FC<TrainerProps> = (
    { currentLevel, setCurrentLevel, appStatus, setAppStatus, progressionScore }: TrainerProps) => {

    const [textInput, setTextInput] = useState("");
    const [textSource, setTextSource] = useState("");
    const [trainerStatus, setTrainerStatus] = useState("idle"); // idle, active, paused, finished
    const [score, setScore] = useState({ time: 0, accuracy: 0, speed: 0, success: false });
    const [errorCount, setErrorCount] = useState(0);
    const [timer, setTimer] = useState({ active: false, start: 0, stored: 0 });

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        setTextSource(textGenerator(currentLevel, wordBank));
        setTextInput("");

    }, [currentLevel]);

    useEffect(() => {
        if (appStatus === "training" && textAreaRef.current) textAreaRef.current.focus();
    }, [appStatus, trainerStatus]);

    useEffect(() => {
        if (!timer.active && timer.start !== 0) {
            setTimer(prevState => ({ ...prevState, stored: Date.now() - timer.start }));
        } else if (timer.active && timer.start !== 0) {
            setTimer(prevState => ({ ...prevState, start: Date.now() - timer.stored }));
        } else if (timer.active && timer.start === 0) {
            setTimer(prevState => ({ ...prevState, start: Date.now() }));
        }
    }, [timer.active]);

    const finishTraining = () => {
        const timeScore = Math.round((Date.now() - timer.start) / 1000);
        const accuracyScore = Number((100 - errorCount / textSource.length * 100).toFixed(2));
        const speedScore = Number((textSource.length * 60000 / (Date.now() - timer.start)).toFixed(0));
        const successScore = accuracyScore > progressionScore.accuracy && speedScore > progressionScore.speed ? true : false;

        setScore({
            time: timeScore,
            accuracy: accuracyScore,
            speed: speedScore,
            success: successScore
        });

        setTrainerStatus("finished");
        setTimer(prevState => ({ ...prevState, active: false }));
        setTextSource(textGenerator(currentLevel, wordBank));
        setTextInput("");
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target) {
            setTextInput(event.currentTarget.value);

            if (!timer.active) {
                setTimer(prevState => ({ ...prevState, active: true }));
            }

            if (event.currentTarget.value !== textSource.slice(0, event.currentTarget.value.length)) {
                setErrorCount(prevState => prevState + 1);
            } else if (event.currentTarget.value === textSource) {

                finishTraining();
            }
        }
    }

    const textSourceClass = textInput !== textSource.slice(0, textInput.length) ? "typo" : "";

    const currentKey = textSource[textInput.length] === `\n` ? "return"
        : textInput !== textSource.slice(0, textInput.length) ? "backsp."
            : textSource[textInput.length];

    const toggleTimer = () => {
        setTimer(prevState => ({ ...prevState, active: !prevState.active }));
    }

    return (
        <>
            {(trainerStatus === "idle" || trainerStatus === "active") &&
                <>
                    <div
                        id="text-source"
                        className={textSourceClass} >
                        {textSource}
                    </div>
                    <textarea
                        id="text-input"
                        ref={textAreaRef}
                        spellCheck={false}
                        value={textInput}
                        onChange={(event) => handleChange(event)}
                    />
                    <Keyboard currentKey={currentKey} />
                    <div id="pause-button" onClick={() => toggleTimer()}>
                        II
                    </div>
                </>
            }
            {trainerStatus === "paused" &&
                <YesNoBox />
            }
            {trainerStatus === "finished" &&
                <FinishBox
                    finishTime={score.time}
                    finishAccurary={score.accuracy}
                    finishSpeed={score.speed}
                    success={score.success}
                    setCurrentLevel={setCurrentLevel}
                    setAppStatus={setAppStatus}
                    setTrainerStatus={setTrainerStatus}
                />
            }
        </>
    );
}

export default Trainer;
