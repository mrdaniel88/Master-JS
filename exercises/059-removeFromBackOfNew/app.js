function removeFromBackOfNew(arr) {
  // your code here
  let arr2 = arr.filter((element, i) => i != arr.length-1);
  return arr2;
}
let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr);