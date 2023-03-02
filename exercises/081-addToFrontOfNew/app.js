function addToFrontOfNew(arr, element) {
    // Write your function here
    let newArr = [];
    newArr.push(element);
    for (let i in arr){
        newArr.push(arr[i])
    }
    return newArr;
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]