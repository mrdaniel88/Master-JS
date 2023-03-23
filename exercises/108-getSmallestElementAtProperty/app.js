let obj = {
    key: [2, 1, 5]
};

function getSmallestElementAtProperty(obj, key) {
    // your code here
    if (obj[key].length == 0 || !Array.isArray(obj[key]) || !obj[key]) {
        return []
    }

    let smallest = 100000000000
    obj[key].map(number => number < smallest ? smallest = number : null)
    return smallest
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1