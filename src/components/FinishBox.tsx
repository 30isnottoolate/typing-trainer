import React from "react";

interface FinishBoxProps {
    finishTime: number;
    finishAccurary: number;
    finishSpeed: number;
}

const FinishBox: React.FC<FinishBoxProps> = ({ finishTime, finishAccurary, finishSpeed }: FinishBoxProps) => {

    return (
        <div className="menu-screen">
            <div className="finish-box">
                <div className="finish-stats-container">
                    <span>Time: </span><span>{finishTime}</span>
                    <span>Accuracy: </span><span>{finishAccurary}</span>
                    <span>Speed: </span><span>{finishSpeed}</span>
                </div>
                <button>Next</button>
                <button>Restart</button>
                <button>Menu</button>
            </div>
        </div>
    );
}

export default FinishBox;
