function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length == 0) return 0;
    let longestWord = 0;
    arr.map(word => word.length > longestWord ? longestWord = word.length : null)

    return longestWord;
}


let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5