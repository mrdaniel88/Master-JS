let obj = {
    key: [1, 2, 4]
};

function getLargestElementAtProperty(obj, key) {
    // your code here
    if (obj[key].length == 0 || !Array.isArray(obj[key]) || !obj[key]) {
        return []
    }

    let largest = 0;
    obj[key].map(number => number > largest ? largest = number : null)

    return largest
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4