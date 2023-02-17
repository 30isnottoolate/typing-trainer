import React from "react";

interface FinishBoxProps {
    finishTime: number;
    finishAccurary: number;
    finishSpeed: number;
    success: boolean;
    setCurrentLevel: React.Dispatch<React.SetStateAction<number>>;
    setAppStatus: React.Dispatch<React.SetStateAction<string>>;
    setTrainerStatus: React.Dispatch<React.SetStateAction<string>>;
}

const FinishBox: React.FC<FinishBoxProps> = ({ finishTime, finishAccurary, finishSpeed, success, setCurrentLevel, setAppStatus, setTrainerStatus }: FinishBoxProps) => {

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
                <p>{success ? "Success! Next level unlocked." : "You need more practice to advance."}</p>
                <div className="finish-stats-container">
                    <span>Time: </span><span>{finishTime} s</span>
                    <span>Accuracy: </span><span>{finishAccurary} %</span>
                    <span>Speed: </span><span>{finishSpeed} chars/min</span>
                </div>
                <div className="buttons-container">
                    {success &&
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
