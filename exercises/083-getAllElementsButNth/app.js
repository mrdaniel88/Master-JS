function getAllElementsButNth(array, n) {
    // Write your function here
    let newArr = [];
    for (let i in array) {
        if (n == i) continue;
        else {
            newArr.push(array[i]);
        }
    }
    return newArr;

}
let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']