const addTwo=(num1,num2)=>num1+num2
//Implicit return
//If curly braces used return keyword is mandatory.
//Paranthesis mandatory when returning object 

console.log(addTwo(3,4));

//IIFE-Immeidiately invoked functions

(function chai(){
    console.log(`DB connected`);
})();