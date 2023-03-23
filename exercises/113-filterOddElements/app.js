function filterOddElements(arr) {
    // your code here
    let result = arr.filter(number => number % 2 != 0)
    return result
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]