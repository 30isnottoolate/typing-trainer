import React, { Dispatch, SetStateAction } from "react";

interface FinishBoxProps {
    currentLevel: number;
    score: { time: number, accuracy: number, speed: number, success: boolean };
    setAppStatus: Dispatch<SetStateAction<string>>;
    nextLevel: () => void;
    restartTraining: () => void;
}

const MAX_LEVEL = 10;

const FinishBox: React.FC<FinishBoxProps> = (
    { currentLevel, score, setAppStatus, nextLevel, restartTraining }: FinishBoxProps) => {

    const finishMessage = score.success && currentLevel < MAX_LEVEL ? "Success! Next level unlocked."
        : score.success && currentLevel === MAX_LEVEL ? "Success! Training completed."
            : "You need more practice to advance.";

    return (
        <div className="menu-screen">
            <div className="finish-box">
                <p>{finishMessage}</p>
                <div className="finish-stats-container">
                    <span>Time: </span><span>{score.time} s</span>
                    <span>Accuracy: </span><span>{score.accuracy} %</span>
                    <span>Speed: </span><span>{score.speed} chars/min</span>
                </div>
                <div className="buttons-container">
                    {(score.success && currentLevel < MAX_LEVEL) &&
                        <button onClick={nextLevel}>Next</button>
                    }
                    <button onClick={restartTraining}>Restart</button>
                    <button onClick={() => setAppStatus("menu")}>Menu</button>
                </div>
            </div>
        </div>
    );
}

export default FinishBox;
