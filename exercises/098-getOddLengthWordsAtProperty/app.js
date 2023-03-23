// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    let oddWords = [];
    if (obj[key].length == 0 || !Array.isArray(obj[key]) || !obj[key]) {
        return oddWords;
    }

    for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i].length % 2 !== 0) {
            oddWords.push(obj[key][i])
        }
    }
    return oddWords
}

let obj = {
    key: ['It', 'has', 'some', 'words']
};
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);