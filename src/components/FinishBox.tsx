import React from "react";

interface FinishBoxProps {
    finishTime: number;
    finishAccurary: number;
    finishSpeed: number;
    success: boolean;
}

const FinishBox: React.FC<FinishBoxProps> = ({ finishTime, finishAccurary, finishSpeed, success }: FinishBoxProps) => {

    return (
        <div className="menu-screen">
            <div className="finish-box">
                <p>{success ? "Success! Next level unlocked." : "You need more practice to advance."}</p>
                <div className="finish-stats-container">
                    <span>Time: </span><span>{finishTime}</span>
                    <span>Accuracy: </span><span>{finishAccurary}</span>
                    <span>Speed: </span><span>{finishSpeed}</span>
                </div>
                {success &&
                    <button>Next</button>}
                <button>Restart</button>
                <button>Menu</button>
            </div>
        </div>
    );
}

export default FinishBox;
