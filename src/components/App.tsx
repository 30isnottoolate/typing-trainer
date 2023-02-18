import React, { useState, useEffect } from "react";
import "./App.css";
import LevelMenu from "./LevelMenu";
import Trainer from "./Trainer";

const App: React.FC = () => {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [appStatus, setAppStatus] = useState("menu"); // menu, training
    const [progressionScore, setProgressionScore] = useState(() => {
        if (localStorage.accuracy && Number(localStorage.accuracy) >= 75 && Number(localStorage.accuracy) <= 100 &&
            localStorage.speed && Number(localStorage.speed) >= 150 && Number(localStorage.speed) <= 300) {

            return { accuracy: Number(localStorage.accuracy), speed: Number(localStorage.speed) }
        } else {
            localStorage.accuracy = 95;
            localStorage.speed = 180;

            return { accuracy: 95, speed: 180 }
        }
    });

    useEffect(() => {
        localStorage.accuracy = progressionScore.accuracy;
        localStorage.speed = progressionScore.speed;
        
    }, [progressionScore.accuracy, progressionScore.speed])

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
                    currentLevel={currentLevel}
                    setCurrentLevel={setCurrentLevel}
                    setAppStatus={setAppStatus}
                    progressionScore={progressionScore}
                />
            }
        </>
    );
}

export default App;
