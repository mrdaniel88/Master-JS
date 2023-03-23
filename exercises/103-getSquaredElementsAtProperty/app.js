let obj = {
    key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if (obj[key].length == 0 || !Array.isArray(obj[key]) || !obj[key]) {
        return [];
    }

    return obj[key].map(element => element * element)
}

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]