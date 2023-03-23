function getLargestElement(arr) {
    // your code here
    if (arr.length < 1) return 0;
    largest = 0;
    for (let element of arr) {
        if (element > largest) {
            largest = element;
        }
    }
    return largest
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;