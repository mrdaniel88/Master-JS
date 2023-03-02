let obj = {
    person:"Rafael",
    lastName:"Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27,
}

function countNumberOfKeys(obj) {
    // your code here
    let count = 0;
    for (let i in obj) {
        count += 1;
    }
    return count;
   
}
console.log(countNumberOfKeys(obj))
