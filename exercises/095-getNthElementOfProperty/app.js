// Write your function here
function getNthElementOfProperty(obj, key, position) {
    if (obj[key].length == 0 || position >= obj[key].length || !Array.isArray(obj[key]) || !obj[key]) {
        return undefined;
    } else {
        let element = obj.key[position]
        return element;
    }
}

let obj = {
    key: [1, 2, 6]
};
let output = getNthElementOfProperty(obj, 'key', 1);
console.log(output);