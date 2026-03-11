// 1st way of declaring string
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");    --> Not recommanded use below method for string 
// concatenation it is also known as string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another method of declaring string 

// here it is considered as object and whatever string we are passing there it is coming like a key value pair like 0:'h'; 
// and it unables us to use various string functions/methods
const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// by using below syntax we can access various functions
// console.log(gameName.length);
// console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// diff between slice and substring is that slice supports negetive index
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);

// removes whitespace
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

// converts string to array based on separator
console.log(gameName.split('-'));