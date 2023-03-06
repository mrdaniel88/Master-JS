// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    let newArr = [];
    
    if (Array.isArray(obj[key]) && obj[key].length !== 0) {
        let arr = obj[key];
        for (let i = 0 ; i < arr.length; i++) {
            if (arr[i] < 100) {
                newArr.push(arr[i])
            } 
        }
        return newArr;
        // arr.forEach(element => {
        //     if (element === 10) {
        //         newArr.push(element);
        //     }
        // }); 
    }
    else {
        return newArr;
    }
}

let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output);