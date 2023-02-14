import React, { ChangeEvent } from "react";
import Keyboard from "./Keyboard";

interface TrainerProps {
    textSourceClass: string;
    textSource: string;
    textAreaRef: React.RefObject<HTMLTextAreaElement>;
    textInput: string;
    handleChange: React.EventHandler<ChangeEvent>;
    currentKey: string;
}

const Trainer: React.FC<TrainerProps> = (
    {textSourceClass, textSource, textAreaRef, textInput, handleChange, currentKey}: TrainerProps) => {

    return (
        <>
            <div
                id="text-source"
                className={textSourceClass} >
                {textSource}
            </div>
            <textarea
                id="text-input"
                ref={textAreaRef}
                spellCheck={false}
                value={textInput}
                onChange={(event) => handleChange(event)}
            />
            <Keyboard currentKey={currentKey} />
        </>
    );
}

export default Trainer;
