// primitive datatype


// 7 categries : String, Number, Boolearn, Null, Undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.33

const IsLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 345353534663535n

console.log(typeof bigNumber);


// reference type (non-primitive type)

// Array, Objects, Functions

const heroes = ["shaktiman","veertheroboboy","doga"]

let myObj = {
    name:"Owais",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// datatype of reference datatype is object and of function is object-function
console.log(typeof heroes);
console.log(typeof id);