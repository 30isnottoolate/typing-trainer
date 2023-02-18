import React from "react";
import { FIRST_ROW, SECOND_ROW, THIRD_ROW, FOURTH_ROW, FIFTH_ROW, COLUMN_CLASSES } from "../utilities/columnsAndRows";

interface KeyboardProps {
    currentKey: string;
}

const Keyboard: React.FC<KeyboardProps> = ({ currentKey }: KeyboardProps) => {

    const columnClass = (item: string, index: number) => {
        let classNameToReturn = item === "" ? "blank-key"
            : (item === "back" || item === "return") ? "special-key"
                : `key ${COLUMN_CLASSES[index]}-column`;

        return classNameToReturn;
    }

    const highlightClass = (item: string) => {
        return `${currentKey && currentKey.toLocaleLowerCase() === item ? " highlighted" : ""}`
    }

    return (
        <div id="keyboard">
            <div className="first-row">
                {FIRST_ROW.map((item, index) =>
                    <div
                        key={index}
                        className={`${columnClass(item, index)}${highlightClass(item)}`} >
                        {item.toUpperCase()}
                    </div>
                )}
            </div>
            <div className="second-row">
                {SECOND_ROW.map((item, index) =>
                    <div
                        key={index}
                        className={`${columnClass(item, index)}${highlightClass(item)}`} >
                        {item.toUpperCase()}
                    </div>
                )}
            </div>
            <div className="third-row">
                {THIRD_ROW.map((item, index) =>
                    <div
                        key={index}
                        className={`${columnClass(item, index)}${highlightClass(item)}`} >
                        {item.toUpperCase()}
                    </div>
                )}
            </div>
            <div className="fourth-row">
                {FOURTH_ROW.map((item, index) =>
                    <div
                        key={index}
                        className={`${columnClass(item, index)}${highlightClass(item)}`} >
                        {item.toUpperCase()}
                    </div>
                )}
            </div>
            <div className="fifth-row">
                {FIFTH_ROW.map((item, index) =>
                    <div
                        key={index}
                        className={`${item === " " ? "space-key" : ""}${item === "" ? "blank-key" : ""}${highlightClass(item)}`}
                    />
                )}
            </div>
        </div>
    );
}

export default Keyboard;
