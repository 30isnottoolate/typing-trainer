import React, { useState, useRef, useEffect } from "react";

import wordBank from "../utilities/wordBank";
import textGenerator from "../utilities/textGenerator";

import Keyboard from "./Keyboard";
import PauseButton from "./PauseButton";
import PauseBox from "./PauseBox";
import FinishBox from "./FinishBox";

interface TrainerProps {
    currentLevel: number;
    setCurrentLevel: React.Dispatch<React.SetStateAction<number>>;
    highestLevel: number;
    setHighestLevel: React.Dispatch<React.SetStateAction<number>>;
    setAppStatus: React.Dispatch<React.SetStateAction<string>>;
    progressionScore: { accuracy: number, speed: number };
}

const Trainer: React.FC<TrainerProps> = (
    { currentLevel, setCurrentLevel, highestLevel, setHighestLevel, setAppStatus, progressionScore }: TrainerProps) => {

    const [textInput, setTextInput] = useState("");
    const [textSource, setTextSource] = useState(textGenerator(currentLevel, wordBank));
    const [trainerStatus, setTrainerStatus] = useState("active"); // active, paused, finished
    const [score, setScore] = useState({ time: 0, accuracy: 0, speed: 0, success: false });
    const [errorCount, setErrorCount] = useState(0);
    const [timer, setTimer] = useState({ active: false, start: 0, stored: 0 });

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        let pingInterval: ReturnType<typeof setInterval>;

        if (timer.active) {
            pingInterval = setInterval(() => {
                console.log(Math.round((Date.now() - timer.start) / 1000));
            }, 500);
        }

        return () => clearInterval(pingInterval);
    }, [timer.active]);

    useEffect(() => {
        if (textAreaRef.current) {
            if (trainerStatus === "active") {
                textAreaRef.current.focus();
                textAreaRef.current.setSelectionRange(textInput.length, textInput.length);

            } else textAreaRef.current.blur();
        }

    }, [trainerStatus]);

    const pauseTraining = () => {
        setTrainerStatus("paused");

        if (timer.active !== false) {
            if (timer.start === 0) {
                setTimer(prevState => ({ ...prevState, active: false }));
            } else {
                setTimer(prevState => ({ ...prevState, active: false, stored: Date.now() - prevState.start }));
            }
        }
    }

    const continueTraining = () => {
        setTrainerStatus("active");
    }

    const restartTraining = () => {
        setTrainerStatus("active");
        setTimer({ active: false, start: 0, stored: 0 });
        setTextSource(textGenerator(currentLevel, wordBank));
        setTextInput("");
    }

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
        setTimer({ active: false, start: 0, stored: 0 });
    }

    const nextLevel = () => {
        setTrainerStatus("active");
        setCurrentLevel(prevState => prevState + 1);
        setTextSource(textGenerator(currentLevel + 1, wordBank));
        setTextInput("");
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target) {
            setTextInput(event.currentTarget.value);

            if (!timer.active) {
                if (timer.stored === 0) {
                    setTimer(prevState => ({ ...prevState, active: true, start: Date.now() }));
                } else {
                    setTimer(prevState => ({ ...prevState, active: true, start: Date.now() - prevState.stored }));
                }
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
        : textInput !== textSource.slice(0, textInput.length) ? "back"
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
            <PauseButton pauseTraining={pauseTraining} />
            {trainerStatus === "paused" &&
                <PauseBox
                    continueTraining={continueTraining}
                    restartTraining={restartTraining}
                    setAppStatus={setAppStatus}
                />
            }
            {trainerStatus === "finished" &&
                <FinishBox
                    score={score}
                    setAppStatus={setAppStatus}
                    nextLevel={nextLevel}
                    restartTraining={restartTraining}
                />
            }
        </>
    );
}

export default Trainer;
