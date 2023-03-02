// Write your function here
function findMinLengthOfThreeWords(wordA, wordB, wordC) {
    
    if (wordA.length > wordB.length && wordC.length > wordB.length){
        
        return wordB.length;
    }
    else if (wordB.length > wordC.length && wordA.length > wordC.length){
        
        return wordC.length;
    }
    else {
        
        return wordA.length;
    }
}

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);