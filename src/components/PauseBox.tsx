import React, {Dispatch, SetStateAction} from "react";

interface PauseBoxProps {
    setTrainerStatus: Dispatch<SetStateAction<string>>;
    restartTraining: () => void;
    setAppStatus: Dispatch<SetStateAction<string>>;
}

const PauseBox: React.FC<PauseBoxProps> = ({setTrainerStatus, restartTraining, setAppStatus}: PauseBoxProps) => {

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
