const JsUser={
    name:"Taneeshq",
    
}
JsUser.greeting=function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo=function(){
    console.log(`Hello,${this.name}`);
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

const tinderUser=new Object();

tinderUser.id=123;
tinderUser.name="John";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

const obj3=Object.assign(obj1,obj2);
// console.log(obj3);

//Destructuring object
const course={
    courseName:"Web",
    price:999,
    courseInstructor:"Steve"

}

const {courseInstructor}=course;

console.log(courseInstructor);

const {courseInstructor:instructor}=course;
console.log(instructor);