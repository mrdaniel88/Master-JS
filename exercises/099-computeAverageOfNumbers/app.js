// Write your function here !
function computeAverageOfNumbers(arr) {
    if (arr.length === 0) return 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    let average = total / arr.length;
    return average;
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output);