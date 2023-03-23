function filterOddLengthWords(words) {
    // your code here
    if (words.length == 0) return [];

    let result = words.filter(word => word.length % 2 != 0)
    return result
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']