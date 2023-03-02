let obj = {
    name: 'Sam',
    age: 20
}

function removeStringValues(obj) {
    // your code here
    for (let i in obj) {
        if (typeof obj[i] === 'string') {
            delete obj[i];
        }
    }
    return obj;
}

removeStringValues(obj);
console.log(obj); // { age: 20 }
