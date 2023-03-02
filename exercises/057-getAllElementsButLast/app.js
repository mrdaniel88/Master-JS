function getAllElementsButLast(array) {
    // your code here
    let arr = array.slice(0, array.length-1)
    return arr
}
let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output);