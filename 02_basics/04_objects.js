// const tinderUser = new Object()      -->constructor method of declaring object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)     --> synatx = Object.assign(target, source)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));        --> Extract all the keys and returns the result in the form of array
// console.log(Object.values(tinderUser));      --> Extract all the values and returns the result in the form of array
// console.log(Object.entries(tinderUser));     --> Returns an array of key value pair

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    --> Checks whether the Object has the given property


// object destructuring
// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// // course.courseInstructor

// const {courseInstructor: instructor} = course    --> renameing using destructuring method
// console.log(instructor);

const student = {
    name: "Suhani",
    age: 20,
    branch: "ETC"
};

let {name, age, branch} = student;

console.log(name);   // Suhani
console.log(age);    // 20
console.log(branch); // ETC


// JSON -- It is nothing but an object but here both key and value is a string except for number and boolean value array, obj 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free",
//     "courseamount": 999
// }

[
    {},
    {},
    {}
]

// we can get api either in the for of JSON or in the form of array of objects