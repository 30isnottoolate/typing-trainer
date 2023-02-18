import React from "react";

interface LevelMenuProps {
    setCurrentLevel: React.Dispatch<React.SetStateAction<number>>;
    setAppStatus: React.Dispatch<React.SetStateAction<string>>;
    progressionScore: { accuracy: number, speed: number };
    setProgressionScore: React.Dispatch<React.SetStateAction<object>>;
}

const levels = [
    "Level 1 (ASDFJKL)",
    "Level 2 (RU)",
    "Level 3 (EI)",
    "Level 4 (WO)",
    "Level 5 (QP)",
    "Level 6 (GH)",
    "Level 7 (TY)",
    "Level 8 (VM)",
    "Level 9 (BN)",
    "Level 10 (C)",
    "Level 11 (ZX)"
];

const LevelMenu: React.FC<LevelMenuProps> = (
    { setCurrentLevel, setAppStatus, progressionScore, setProgressionScore }: LevelMenuProps) => {

    const changeAccuracyScore = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProgressionScore(prevState => ({ ...prevState, accuracy: event.target.value }));
    }

    const changeSpeedScore = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProgressionScore(prevState => ({ ...prevState, speed: event.target.value }));
    }

    return (
        <div className="menu-screen">
            <div className="menu-box">
                <p>Highest level reached:</p>
                <p>Settings</p>
                <p>Threshold to unlock next level:</p>
                <div>
                    <label htmlFor="accuracy">Accuracy: </label>
                    <input
                        type="number"
                        name="accuracy"
                        min="75"
                        max="100"
                        value={progressionScore.accuracy}
                        onChange={event => changeAccuracyScore(event)}
                    />
                    <span> %</span>
                </div>
                <div>
                    <label htmlFor="speed">Speed: </label>
                    <input
                        type="number"
                        name="speed"
                        min="150"
                        max="300"
                        value={progressionScore.speed}
                        onChange={event => changeSpeedScore(event)}
                    />
                    <span> char/min</span>
                </div>
                <label htmlFor="level-selection">Choose a level: </label>
                <select
                    name="level-selection"
                    onChange={event => setCurrentLevel(Number(event.target.value))}>
                    {levels.map((item, index) =>
                        <option
                            key={index}
                            value={index + 1} >
                            {item}
                        </option>
                    )}
                </select>
                <button onClick={() => setAppStatus("training")}>Start Training</button>
            </div>
        </div>
    );
}

export default LevelMenu;
