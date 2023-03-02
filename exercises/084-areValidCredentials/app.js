// Write your function here
function areValidCredentials(userName, password){
   return userName.length > 3 && password.length >= 8 ? true : false;
}

let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero