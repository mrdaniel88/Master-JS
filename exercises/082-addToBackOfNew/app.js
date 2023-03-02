function addToBackOfNew(arr, element) {
    // Write your function here
    let newArr = [];
    newArr.push(element);

    for (let i = arr.length-1; i >= 0; i--){
        newArr.unshift(arr[i]);
    }

    return newArr;
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]