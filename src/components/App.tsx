import React, { useState } from "react";
import "./App.css";
import LevelMenu from "./LevelMenu";
import Trainer from "./Trainer";

const App: React.FC = () => {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [appStatus, setAppStatus] = useState("menu"); // menu, training
    const [progressionScore, setProgressionScore] = useState({ accuracy: 95, speed: 180 });

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
                    appStatus={appStatus}
                    setAppStatus={setAppStatus}
                />
            }
        </>
    );
}

export default App;
