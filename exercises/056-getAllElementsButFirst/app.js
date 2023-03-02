function getAllElementsButFirst(array) {
  // your code here
  let arr = array.slice(1)
  return arr
}
let input = [1, 2, 3, 4];
let output = getAllElementsButFirst(input);
console.log(output);