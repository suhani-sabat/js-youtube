// how it is stored in memory and how it is accessed based on this we categorise data types into two types - Primitive & non-primitive

//  Primitive (they are call by value) --> Uses stack memory(We are getting a copy of a variable)

//  7 types : String, Number, Boolean, null, undefined, Symbol(makes anything unique), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive) --> Uses heap memory(We are directly getting ref of a varible) 

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3
// js is a dynamically typed lang because we don't have to define any datatype before a varible
// typeof all the datatypes is same as their name except null, arrays because their datatypes are objects 
// and datatype of function is said as object function