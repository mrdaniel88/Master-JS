// Write your function here
function getAverageOfElementsAtProperty (obj, key) {
    let total = 0;
    let arr = obj[key];
    if (!obj[key] || obj[key].length === 0) {
        return 0;
    }
    arr.forEach(element => {
        total += element;
        });
    return total / arr.length;
}