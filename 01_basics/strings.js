const gameName=new String("Hello");

console.log(gameName[0]);
//new String returns an object which consists of key-value pairs

const newNo=new Number(100000);
console.log(newNo.toLocaleString('en-IN'));
console.log(Math.round(4.5));

//Random in range
let max=20;
let min=10;
console.log(Math.floor((Math.random()*(max-min+1))+min));