let obj = {
    key: [1, 2, 3]
};

function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (obj[key].length == 0 || !Array.isArray(obj[key]) || !obj[key]) {
        return []
    }
    obj[key].pop()
    return obj[key]
}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]