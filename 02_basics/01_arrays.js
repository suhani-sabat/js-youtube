// array

// js array support diff datatypes for a single array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)    --> add 6 to the end
// myArr.push(7)    --> remove the last element
// myArr.pop()

// myArr.unshift(9)     --> add 9 at the beginning due to this all the element is shifted to a new pos and due to this it is a time consuming process
// myArr.shift()        --> remove the 1st element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()      --> makes the elements of the array into string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// diff between slice and splice is that in slice last index is not included and after slicing it doesn't change anything in 
// original array but in splice it includes the last index and also it also modifies the original array that means it removes 
// the spliced portion from the original array
