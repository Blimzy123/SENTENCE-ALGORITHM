const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence ending with a point: ", function(sentence) {

    let length = 0;
    let words = 1;
    let vowels = 0;

    for (let i = 0; i < sentence.length; i++) {

        let character = sentence[i];

        if (character === ".") {
            break;
        }

        length++;

        if (character === " ") {
            words++;
        }

        if (
            character === "a" ||
            character === "e" ||
            character === "i" ||
            character === "o" ||
            character === "u"
        ) {
            vowels++;
        }
    }

    console.log("Length of sentence:", length);
    console.log("Number of words:", words);
    console.log("Number of vowels:", vowels);

    rl.close();
});