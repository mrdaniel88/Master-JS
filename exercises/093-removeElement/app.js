// Write your function here

function removeElement(arr, discarded) {
    let newArr = [];
    if (arr.length !== 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != discarded) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    } 
    else return newArr;
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);