let score=33  //acting as a number
console.log(typeof score) // output => number
console.log(typeof(score)) // output => number

let sccore="33"  //acting as a string
console.log(typeof sccore)  // output => string
console.log(typeof(sccore))  // output => string

let x = "a12"
let charInNumber = Number(x)
console.log(charInNumber) // ouput => NaN
console.log(typeof charInNumber) // output => number


// "33" => 33
// "33abc" => NaN
//  true => 1    false => 0


let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // output  =>  true

let someNumber = 45
let NumberToString = String(someNumber)   
console.log(NumberToString) // output => 45
console.log(typeof NumberToString)  // output => stringad