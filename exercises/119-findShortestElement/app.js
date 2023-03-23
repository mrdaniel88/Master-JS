function findShortestElement(arr) {
    // your code here
    let shortest = '1111111111111111111111111111111111111'
    if (arr.length < 1) return '';
    for (element of arr) {
        if (element.length < shortest.length) {
            shortest = element;
        }
    }
    return shortest
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'