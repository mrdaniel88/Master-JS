// Write your function here
function getFirstElementOfProperty(obj, key) {
    if (obj[key]) {
        let element = obj.key[0];
        return element;
    } else {
        return undefined
    }

}
let obj = {
    key: [1, 2, 4]
};
let output = getFirstElementOfProperty(obj, 'key');
console.log(output);