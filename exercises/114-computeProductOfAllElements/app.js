function computeProductOfAllElements(arr) {
    // your code here
    if (arr.length < 1) return 0
    let result = 1
    for (number of arr) {
        result *= number
    }
    return result
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60