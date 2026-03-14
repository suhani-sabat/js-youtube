//var c = 300
let a = 300
// it is called as global scope
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    // it is called as block scope 
}



// console.log(a);
// console.log(b);
// console.log(c);      --> whenever we are using var at that time it is not seeing whether it is golobal scope or block scope here in this case global scope value is overwritten by bloack scope by again decalring var c = 30 inside the if statement


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
