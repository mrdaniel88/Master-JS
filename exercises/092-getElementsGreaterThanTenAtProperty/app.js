// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    let newArr = [];

    if (Array.isArray(obj[key]) && obj[key].length !== 0) {
        let arr = obj[key];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 10) {
                newArr.push(arr[i])
            }
        }
        return newArr;
    }
    else {
        return newArr
    }
}


let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output);