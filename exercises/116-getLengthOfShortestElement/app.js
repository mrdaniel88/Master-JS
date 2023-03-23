function getLengthOfShortestElement(arr) {
    // your code here
    let shortest = 100000000000
    if (arr.length < 1) return 0;
    for (let element of arr) {
        element.length < shortest ? shortest = element.length : null;
    }
    return shortest

}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3