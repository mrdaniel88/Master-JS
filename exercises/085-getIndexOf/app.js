// Write your function here
function getIndexOf(letter, sentence) {
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == letter){
            return i;
        }
    }

    return -1;
}

let output = getIndexOf('a', 'I am a hacker');
console.log(output);