import React from "react";

const PauseBox: React.FC = () => {

    return (
        <div className="menu-screen">
            <div className="pause-box">
                <p>Training paused</p>
                <button>Continue</button><button>Restart</button><button>Menu</button>
            </div>
        </div>
    );
}

export default PauseBox;
