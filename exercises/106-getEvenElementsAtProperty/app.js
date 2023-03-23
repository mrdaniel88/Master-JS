let obj = {
    key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    if (obj[key].length == 0 || !Array.isArray(obj[key]) || !obj[key]) {
        return [];
    }

    let result = []
    obj[key].map(number => number % 2 == 0 ? result.push(number) : null)
    return result
}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]