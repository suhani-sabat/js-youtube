// singleton  --> if made like constructor otherwise if made like literals it is not singleton

// Object.create    --> constructor

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    // "full name": "Hitesh Choudhary",     --> cannot be acessed using . operator as there is spaces
    // [mySym]: "mykey1",                   --> symbols are used like this in obj (imp)
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)        --> doesn't allow any further modification in the obj
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    // console.log(`Hello JS user, ${this.name}`);  --> this keyword is used to refer to the obj in which we are present now
}

// console.log(JsUser.greeting)     --> it doesn't actually give the function rather it gives reference
// console.log(JsUser.greeting());  --> actually executes the function
console.log(JsUser.greetingTwo());