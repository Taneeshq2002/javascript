const arr=[1,2,3,4,5];
//for of
// for(const num of arr){
//     console.log(num);
// }

//Maps
const  map=new Map();
map.set('IN',"India");
map.set("USA","America");
console.log(map);
for(const [key,value] of map){
    console.log(`Key: ${key},Value:${value}`);
}

arr.forEach((num)=>{
    console.log(num);
})

const langs=["JS","PYTHON","C"];
langs.forEach(printMe);

function printMe(item){
    console.log(item);
}