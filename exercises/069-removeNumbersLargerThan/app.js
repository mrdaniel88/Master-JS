let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
    for (let i in obj) {
        if (obj[i] > num) {
            delete obj[i];
        }
    }
    return obj;
}