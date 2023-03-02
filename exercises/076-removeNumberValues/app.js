let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    for (let i in obj) {
        if (typeof obj[i] === 'number') {
            delete obj[i];
        }
    }
    return obj
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }