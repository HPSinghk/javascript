// Primitive data type 
// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint 


// non primitive data type (refrence)
// Array, Objects, Functions


// primitve goes into stack and uski copy bnti hai
console.log("example of primitive type : ")
let name ="harendra"
let changedName =name
changedName = "rajpal"
console.log(changedName)
console.log("phle wala nhi bdla ==>")
console.log(name)

console.log("\n\n")
// non primitve heap mein jata hai or uska refrence milta hai copy create nhi hoti 
console.log("example of non-primitive type :")
let user1={
    username : "harendra",
    email : "harendra@dotcom"
}
let user2 = user1
user2.username = "rajpal"
user2.email = "raj@dotcom"

console.log(user2.username)
console.log(user2.email)
console.log("phle wala bhi bdl gya ==>")
console.log(user1.username)
console.log(user1.email)

