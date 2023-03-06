// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    let newArr = [];
    
    if (Array.isArray(obj[key])) {
        let arr = obj[key];
        for (let i = 0 ; i < arr.length; i++) {
            if (arr[i] === 10) {
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
    key: [1000, 10, 50, 10]
};
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);