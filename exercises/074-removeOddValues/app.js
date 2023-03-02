function removeOddValues(obj) {
    // your code here
    for (let i in obj) {
        if (obj[i] % 2 != 0) {
            delete obj[i];
        }
    }
    return obj;
}