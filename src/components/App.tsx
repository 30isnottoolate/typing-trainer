import React, {useState} from "react";

const App: React.FC = () => {
    const [textSource, setTextSource] = useState("Some text.");
    const [textInput, setTextInput] = useState("");

    return (
        <div>
            <div id="text-source">{textSource}</div>
            <textarea id="text-input" value={textInput} onChange={(event) => setTextInput(event.currentTarget.value)} />
        </div>
    );
}

export default App;
