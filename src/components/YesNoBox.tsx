import React from "react";

const YesNoBox: React.FC = () => {

    return (
        <div className="menu-screen">
            <div className="yes-no-box">
                <p>Are you sure you want to stop the training?</p>
                <button>Yes</button><button>No</button>
            </div>
        </div>
    );
}

export default YesNoBox;
