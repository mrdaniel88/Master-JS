let obj = {
    key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    if (obj[key].length == 0 || !Array.isArray(obj[key]) || !obj[key]) {
        return []
    }

    let result = [];
    obj[key].map(number => {
        number % 2 != 0 ? result.push(number) : null;
    })
    return result

}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]