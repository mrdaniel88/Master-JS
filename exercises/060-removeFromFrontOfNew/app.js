function removeFromFrontOfNew(arr) {
    // your code here
    let arr2 = arr.filter((e, i) => i != 0)
    return arr2
}
let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr);