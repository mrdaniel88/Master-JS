// Write your function here
function select (arr, obj) {
    let newObj = {}
    arr.forEach(element => {
        if (obj[element]) {
            newObj[element] = obj[element];
        }        
    });
    return newObj
}