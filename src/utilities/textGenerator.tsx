const textGenerator = (currentLevel: number, numberOfLines: number, wordBank: string[][]) => {
    let textCollector = "";

    if (currentLevel >= 0) {
        let currentWords = wordBank[currentLevel];

        for (let line = 0; line < numberOfLines; line++) {
            let lineCollector = "";
            let isLineFull = false;

            do {
                let randomIndex = Math.floor(Math.random() * currentWords.length);
                let randomWord = currentWords[randomIndex];

                if ((lineCollector + randomWord).length < 66) {
                    lineCollector = `${lineCollector} ${randomWord}`;
                } else {
                    textCollector = `${textCollector}\n${lineCollector.trim()}`;
                    isLineFull = true;
                }
            }
            while (!isLineFull);
        }
    }

    return textCollector.trim();
}

export default textGenerator;
