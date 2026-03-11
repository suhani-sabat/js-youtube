const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)      --> it treats dc_heros array as a single element and at the last it adds it like here in index 3 ["superman", "flash", "batman"] it is present

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); --> flash will be the output

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);                               --> it doesn't make any changes in the original array so we have to store it in another for printing
// console.log(marvel_heros);


const all_new_heros = [...marvel_heros, ...dc_heros]
// ... is the spread operator it treats elements of the array as individual then adds it in new array. We can use multiple array heere but in concat we can only use 2

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))        --> convert into array from iterables like string, set, nodelist
console.log(Array.from({name: "hitesh"})) // interesting    ['h','i','t','e','s','h']

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));   --> convert into array from set of values passed as an argument
// console.log(Array.of("suhani"))          --> ['suhani']