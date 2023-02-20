import React, {Dispatch, SetStateAction} from "react";

interface FinishBoxProps {
    currentLevel: number;
    score: {time: number, accuracy: number, speed: number, success: boolean};
    setAppStatus: Dispatch<SetStateAction<string>>;
    nextLevel: () => void;
    restartTraining: () => void;
}

const FinishBox: React.FC<FinishBoxProps> = (
    { currentLevel, score, setAppStatus, nextLevel, restartTraining }: FinishBoxProps) => {

    return (
        <div className="menu-screen">
            <div className="finish-box">
                <p>{score.success ? "Success! Next level unlocked." : "You need more practice to advance."}</p>
                <div className="finish-stats-container">
                    <span>Time: </span><span>{score.time} s</span>
                    <span>Accuracy: </span><span>{score.accuracy} %</span>
                    <span>Speed: </span><span>{score.speed} chars/min</span>
                </div>
                <div className="buttons-container">
                    {score.success &&
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
