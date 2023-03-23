function getAverageOfElementsAtProperty(obj, key) {
    // your code here
    if (obj[key].length === 0 || !Array.isArray(obj[key]) || !obj[key]) {
        return 0;
    }

    let total = 0;
    for (let i = 0; i < obj[key].length; i++) {
        total += obj[key][i]
    }
    let average = total / obj[key].length;
    return average;
}

let obj = {
    key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);