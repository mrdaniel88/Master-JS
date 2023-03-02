function convertDoubleSpaceToSingle(str) {
    // your code here
    let splitStr = str.split('  ');
    let joinStr = splitStr.join(' ');
    return joinStr;
    
}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"