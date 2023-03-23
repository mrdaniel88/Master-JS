function squareElements(arr) {
    // your code here
    let square = [];
    for (let number of arr) {
        square.push(number * number)
    }
    return square
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]