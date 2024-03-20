const myNums=[1,2,3,4,5,6,7,8,9,10]
const numbers=[1,2,3];

// const newNums=myNums.filter((num)=>{return num>4})//If curly braces used then value should be returned explicitly
// const newNums=myNums.filter((num)=>( num>4))//
// console.log(newNums);

const newNums=myNums.map((num)=>(num+10))
console.log(newNums);

const TotalNums=numbers.reduce((acc,curr)=>{
    console.log(`acc:${acc} and curr:${curr}`);
    return acc+curr;
},0);
console.log(TotalNums);