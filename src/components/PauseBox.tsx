import React from "react";

interface PauseBoxProps {
    setTrainerStatus: React.Dispatch<React.SetStateAction<string>>;
    restartTraining: () => void;
    setAppStatus: React.Dispatch<React.SetStateAction<string>>;
}

const PauseBox: React.FC<PauseBoxProps> = ({setTrainerStatus, restartTraining, setAppStatus}) => {

    return (
        <div className="menu-screen">
            <div className="pause-box">
                <p>Training paused</p>
                <button>Continue</button>
                <button>Restart</button>
                <button>Menu</button>
            </div>
        </div>
    );
}

export default PauseBox;
