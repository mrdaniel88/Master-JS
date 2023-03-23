function filterEvenLengthWords(words) {
    // your code here
    let result = []
    words.map(word => {
        if (word.length % 2 == 0) {
            result.push(word)
        }
    })
    return result;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']