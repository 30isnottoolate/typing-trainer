import React from "react";

interface LevelMenuProps {
}

const LevelMenu: React.FC<LevelMenuProps> = ({ }: LevelMenuProps) => {

    return (
        <div className="menu-screen">
            <div className="menu-box">
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
