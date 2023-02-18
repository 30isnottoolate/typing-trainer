import React from "react";

interface FinishBoxProps {
    score: {time: number, accuracy: number, speed: number, success: boolean};
    setCurrentLevel: React.Dispatch<React.SetStateAction<number>>;
    setAppStatus: React.Dispatch<React.SetStateAction<string>>;
    setTrainerStatus: React.Dispatch<React.SetStateAction<string>>;
}

const FinishBox: React.FC<FinishBoxProps> = ({ score, setCurrentLevel, setAppStatus, setTrainerStatus }: FinishBoxProps) => {

    const nextLevel = () => {
        setCurrentLevel(prevState => prevState + 1);
        setTrainerStatus("active");
    }

    const restartLevel = () => {
        setTrainerStatus("active");
    }

    const toMenu = () => {
        setAppStatus("menu");
    }

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
                    <button onClick={restartLevel}>Restart</button>
                    <button onClick={toMenu}>Menu</button>
                </div>
            </div>
        </div>
    );
}

export default FinishBox;
