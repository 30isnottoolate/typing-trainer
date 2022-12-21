import React, {useState} from "react";

const App: React.FC = () => {
    const [textSource, setTextSource] = useState("Some text.");
    const [textInput, setTextInput] = useState("");
    const [errorCount, setErrorCount] = useState(0);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target) {
            setTextInput(event.currentTarget.value);

            if (event.currentTarget.value !== textSource.slice(0, event.currentTarget.value.length)) {
                setErrorCount(prevState => prevState + 1);
            } else if (event.currentTarget.value === textSource) {
                console.log("Done. Number of errors: " + errorCount);
            }
        }
    }

    return (
        <div>
            <div id="text-source">{textSource}</div>
            <textarea id="text-input" value={textInput} onChange={(event) => handleChange(event)} />
        </div>
    );
}

export default App;
