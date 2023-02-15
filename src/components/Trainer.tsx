import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import Keyboard from "./Keyboard";
import YesNoBox from "./YesNoBox";
import FinishBox from "./FinishBox";

interface TrainerProps {
    textSource: string;
    textInput: string;
    setCurrentLevel: React.Dispatch<React.SetStateAction<number>>;
    appStatus: string;
    setAppStatus: React.Dispatch<React.SetStateAction<string>>;
    setTextInput: React.Dispatch<React.SetStateAction<string>>;
}

const Trainer: React.FC<TrainerProps> = (
    { textSource, textInput, setCurrentLevel, appStatus, setAppStatus, setTextInput }: TrainerProps) => {

    const [trainerStatus, setTrainerStatus] = useState("idle"); // idle, active, paused, finished
    const [score, setScore] = useState({ time: 0, accuracy: 0, speed: 0, success: false });
    const [errorCount, setErrorCount] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    const [startingTime, setStartingTime] = useState(0);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

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
                />
            }
        </>
    );
}

export default Trainer;