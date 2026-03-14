// Immediately Invoked Function Expressions (IIFE)
// sometimes variables are polluted by global scope variable and for immediate execution we are using iife

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// although after writing this the function is invoked but it didn't know where to stop so we have to put a semicolon after the end 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

