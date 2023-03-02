function countCharacter(str, char) {
    // your code here
    let counter = 0;
    for (let i in str) {
        
        let letter = str[i].toLowerCase();
        if (letter == char) {
            counter += 1;
        }
    }
    return counter;
}
let output = countCharacter('I am a hacker', 'a');
console.log(output);