import React, { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";

import wordBank from "../utilities/wordBank";
import textGenerator from "../utilities/textGenerator";

import Keyboard from "./Keyboard";
import PauseButton from "./PauseButton";
import PauseBox from "./PauseBox";
import FinishBox from "./FinishBox";

interface TrainerProps {
    currentLevel: number;
    setCurrentLevel: Dispatch<SetStateAction<number>>;
    highestLevel: number;
    setHighestLevel: Dispatch<SetStateAction<number>>;
    numberOfLines: number;
    setAppStatus: Dispatch<SetStateAction<string>>;
    progressionScore: { accuracy: number, speed: number };
    keyboardVisibility: boolean;
    timerVisibility: boolean;
}

const MAX_LEVEL = 10;

const Trainer: React.FC<TrainerProps> = (
    { currentLevel, setCurrentLevel, highestLevel, setHighestLevel, numberOfLines, setAppStatus,
        progressionScore, keyboardVisibility, timerVisibility }: TrainerProps) => {

    const [textInput, setTextInput] = useState("");
    const [textSource, setTextSource] = useState(textGenerator(currentLevel, numberOfLines, wordBank));
    const [trainerStatus, setTrainerStatus] = useState("active"); // active, paused, finished
    const [score, setScore] = useState({ time: 0, accuracy: 0, speed: 0, success: false });
    const [errorCount, setErrorCount] = useState(0);
    const [timer, setTimer] = useState({ active: false, value: 0, start: 0, stored: 0 });

    const textSourceRef = useRef<HTMLDivElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        let pingInterval: ReturnType<typeof setInterval>;

        if (timer.active) {
            pingInterval = setInterval(() => {
                setTimer(prevState => ({ ...prevState, value: Math.round((Date.now() - timer.start) / 1000) }));
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
        setTimer({ active: false, value: 0, start: 0, stored: 0 });
        setTextSource(textGenerator(currentLevel, numberOfLines, wordBank));
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
        setTimer({ active: false, value: 0, start: 0, stored: 0 });

        if (currentLevel === highestLevel && successScore && currentLevel < MAX_LEVEL) {
            setHighestLevel(prevState => prevState + 1);
        }
    }

    const nextLevel = () => {
        setTrainerStatus("active");
        setCurrentLevel(prevState => prevState + 1);
        setTextSource(textGenerator(currentLevel + 1, numberOfLines, wordBank));
        setTextInput("");
    }

    const handeKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        let numberOfInputLines = textInput.match(/\n/g);

        if (numberOfInputLines && numberOfInputLines.length === numberOfLines - 1 && event.code === "Enter") {
            event.preventDefault();
        }
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

    const handleScroll = (event: React.UIEvent<HTMLTextAreaElement>) => {
        textSourceRef.current && textSourceRef.current.scrollTo({ top: event.currentTarget.scrollTop });
    }

    const textSourceClass = textInput !== textSource.slice(0, textInput.length) ? "typo" : "";

    const currentKey = textSource[textInput.length] === `\n` ? "return"
        : textInput !== textSource.slice(0, textInput.length) ? "back"
            : textSource[textInput.length];

    return (
        <>
            <div className="text-container">
                {timerVisibility &&
                    <p className="timer">{timer.value}</p>
                }
                <div
                    ref={textSourceRef}
                    className={`text-source ${textSourceClass}`} >
                    {textSource}
                </div>
                <textarea
                    ref={textAreaRef}
                    className="text-input"
                    spellCheck={false}
                    value={textInput}
                    onKeyDown={event => handeKeyDown(event)}
                    onChange={event => handleChange(event)}
                    onScroll={event => handleScroll(event)}
                />

            </div>
            {keyboardVisibility &&
                <Keyboard currentKey={currentKey} />
            }
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
                    currentLevel={currentLevel}
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
