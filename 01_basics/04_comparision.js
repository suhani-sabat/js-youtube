// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);        => gives output as "true" because js automatically converts it to number
// console.log("02" > 1);       => same

// console.log(null > 0);       => false
// console.log(null == 0);      => false
// console.log(null >= 0);      => "true" because comparision(>,<,>=,<=) converts null to a number treating it as 0 thats why it gives true
// console.log(null <= 0);      => true for the same reason

// console.log(undefined == 0);     => false
// console.log(undefined > 0);      => false
// console.log(undefined < 0);      => false

// === 
// console.log("2" == 2);    => "true" because it converts it into number
// console.log("2" === 2);   => "false" because === also checks data types