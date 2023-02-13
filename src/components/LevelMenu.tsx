import React from "react";

interface LevelMenuProps {
    setCurrentLevel: React.Dispatch<React.SetStateAction<number>>;
    setAppStatus: React.Dispatch<React.SetStateAction<string>>;
}

const LevelMenu: React.FC<LevelMenuProps> = ({ }: LevelMenuProps) => {

    return (
        <div className="menu-screen">
            <div className="menu-box">
                <p>Highest level reached:</p>
                <p>Settings</p>
                <p>Threshold to unlock next level:</p>
                <div>
                    <label htmlFor="accuracy">Accuracy:</label>
                    <input type="number" name="accuracy" min="75" max="100" value="85" />
                    <span>%</span>
                </div>
                <div>
                    <label htmlFor="speed">Speed:</label>
                    <input type="number" name="speed" min="150" max="300" value="180" />
                    <span>char/min</span>
                </div>
                <label htmlFor="level-selection">Choose a level:</label>
                <select name="level-selection">
                    <option>1</option>
                    <option disabled>2</option>
                    <option disabled>3</option>
                </select>
                <button>Start Training</button>
            </div>
        </div>
    );
}

export default LevelMenu;
