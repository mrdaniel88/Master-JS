// Write your function here
function keep(arr, element) {
    let finalArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            finalArr.push(arr[i])
        }
    }
    return finalArr;
}


let output = keep([1, 2, 3, 2, 1], 2)
console.log(output);