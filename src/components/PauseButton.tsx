import React from "react";

interface PauseButtonProps {
    pauseTraining: () => void;
}

const PauseButton: React.FC<PauseButtonProps> = ({ pauseTraining }: PauseButtonProps) => {

    return (
        <div id="pause-button" onClick={() => pauseTraining()}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 16 16">
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
        </div>
    );
}

export default PauseButton;
