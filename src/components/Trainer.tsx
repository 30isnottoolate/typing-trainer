import React, { useState, useRef, useEffect } from "react";

import wordBank from "../utilities/wordBank";
import textGenerator from "../utilities/textGenerator";

import Keyboard from "./Keyboard";
import PauseBox from "./PauseBox";
import FinishBox from "./FinishBox";

interface TrainerProps {
    currentLevel: number;
    setCurrentLevel: React.Dispatch<React.SetStateAction<number>>;
    setAppStatus: React.Dispatch<React.SetStateAction<string>>;
    progressionScore: { accuracy: number, speed: number };
}

const Trainer: React.FC<TrainerProps> = (
    { currentLevel, setCurrentLevel, setAppStatus, progressionScore }: TrainerProps) => {

    const [textInput, setTextInput] = useState("");
    const [textSource, setTextSource] = useState("");
    const [trainerStatus, setTrainerStatus] = useState("active"); // active, paused, finished
    const [score, setScore] = useState({ time: 0, accuracy: 0, speed: 0, success: false });
    const [errorCount, setErrorCount] = useState(0);
    const [timer, setTimer] = useState({ active: false, start: 0, stored: 0 });

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        setTextSource(textGenerator(currentLevel, wordBank));
        setTextInput("");

    }, [currentLevel]);

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

        if (timer.start === 0) {
            setTimer(prevState => ({ ...prevState, active: false }));
        } else {
            setTimer(prevState => ({ ...prevState, active: false, stored: Date.now() - timer.start }));
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

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target) {
            setTextInput(event.currentTarget.value);

            if (!timer.active) {
                if (timer.stored === 0) {
                    setTimer(prevState => ({ ...prevState, active: true, start: Date.now() }));
                } else {
                    setTimer(prevState => ({ ...prevState, active: true, start: Date.now() - timer.stored }));
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
            <div id="pause-button" onClick={() => pauseTraining()}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 16 16">
                    <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
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
                    setCurrentLevel={setCurrentLevel}
                    setAppStatus={setAppStatus}
                    setTrainerStatus={setTrainerStatus}
                    restartTraining={restartTraining}
                />
            }
        </>
    );
}

export default Trainer;
