let obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (obj[key].length < 1 || index > obj[key].length || !Array.isArray(obj[key]) || !obj[key]) {
        return undefined
    }
    if (obj[key][index]) return obj[key][index]


}
let output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output);