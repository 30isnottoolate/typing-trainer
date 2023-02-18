import React, {Dispatch, SetStateAction} from "react";

interface PauseBoxProps {
    continueTraining: () => void;
    restartTraining: () => void;
    setAppStatus: Dispatch<SetStateAction<string>>;
}

const PauseBox: React.FC<PauseBoxProps> = ({continueTraining, restartTraining, setAppStatus}: PauseBoxProps) => {

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
