import React from "react";
import { FIRST_ROW, SECOND_ROW, THIRD_ROW, FOURTH_ROW, FIFTH_ROW, COLUMN_CLASSES } from "../utilities/columnsAndRows";

/* const FIRST_ROW = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "", "", ""];
const SECOND_ROW = ["", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "", "", ""];
const THIRD_ROW = ["", "a", "s", "d", "f", "g", "h", "j", "k", "l", "", "", ""];
const FOURTH_ROW = ["", "z", "x", "c", "v", "b", "n", "m", ",", ".", "", ""];
const FIFTH_ROW = ["", "", "", " ", "", "", "", ""];

const COLUMN_CLASSES = ["", "first", "second", "third", "fourth", "fourth", "first", "first", "second", "third", "fourth"]; */

interface KeyboardProps {
    currentKey: string;
}

const Keyboard: React.FC<KeyboardProps> = ({ currentKey }: KeyboardProps) => {

    const columnClass = (item: string, index: number) => {
        return `${item === "" ? "blank-key" : `key ${COLUMN_CLASSES[index]}-column`}`;
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
