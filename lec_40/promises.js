setTimeout(()=>{console.log("code for promiseOne start from here ==>")},2000)
const promiseOne = new Promise(function(resolve, reject){
    // do zsync task
    // db call, cryptography, network
    setTimeout(function(){
        console.log("async task is completed");
        resolve()
    },2000)
})

// resolve ka seedha connection hai dot then ke sath

promiseOne.then(function(){
    console.log("promise consumed")

})
setTimeout(()=>{console.log("code for promiseTwo start from here ==>")},2000)

new Promise(function(resolve, reject){
    setTimeout(function(){
         console.log("async task 2")
         resolve()
    },2000)
}).then(function(){
    console.log("task 2 resolved")
})

setTimeout(()=>{console.log("code for promiseThree start from here ==>")},2000)

const promisethree = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({username : "harendra", email: "hps@gmail.com" })
        // resolve me parameter pass kr skte hai

    },2000)
})
promisethree.then(function(data){
    console.log(data)
})

setTimeout(()=>{console.log("code for promisefour start from here ==>")},2000)
const promiseFour= new Promise(function(resolve, reject){
       setTimeout(function(){
        let error=false
       if(!error){
        resolve({username : "harendra", email: "hps@gmail.com" })
       }
       else{
        reject('ERROR :something went wrong  ye catch ki help se print kra skte hai')
       }
       },2000)
})

 /* const dataStore=promiseFour.then((user)=>{
    return user.username
})
console.log(dataStore) */
// above methode se hum data nhi nikal skte iski jagaha hum chaining 
//kr skte hai // chaining is given below

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((data)=>{
   console.log(data)
}).catch((wrong)=>{
    console.log(wrong)
}).finally(()=>{console.log("the promise i finally resolve or rejectd")})

setTimeout(()=>{console.log("code for promisefive start from here ==>")},2000)
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error=false
       if(!error){
        resolve({username : "harendra", email: "hps@gmail.com" })
       }
       else{
        reject('ERROR :something went wrong  ye catch ki help se print kra skte hai')
       }
       },2000)
})

async function promiseFiveConsume(){
    try {
        const ans = await promiseFive
        console.log(ans)
    } catch (error) {
        console.log(error)
    }
}
promiseFiveConsume()

/* async function getAllUser(){
    const response = await fetch('http://headers.jsontest.com/')
    const data = response.json()
    console.log(data)
}
getAllUser() */  // in this method we are not looking if there is any error 
// while fetching so we use try and catach that is given below 

/* async function getAllUser(){
   try {
    const response = await fetch('http://headers.jsontest.com/')
    const data = response.json()
    console.log(data)
   } catch (error) {
    console.log(error)
   }
}
getAllUser() */ // is code ko chalane hai to bhi output nhi aata
// kyunki jb hum response ko json formate me kr rhe to usme time lgta hai
// or humne vha await ka use nhi kiaa
// now we are printing only response below without converting it 
// to json formate

/* async function getAllUser(){
   try {
    const response = await fetch('http://headers.jsontest.com/')
    console.log(response)
   } catch (error) {
    console.log(error)
   }
}
getAllUser() */ // this is working but not giving providing data in json formate

async function getAllUser(){
    try {
     const response = await fetch('http://headers.jsontest.com/')
     const data = await response.json();
     console.log(data)
    } catch (error) {
     console.log(error)
    }
 }
 getAllUser()

 fetch('http://headers.jsontest.com/')
 .then((response)=>{
    return response.json()
 })
 .then((data)=>{console.log(data)})
 .catch((error)=>{console.log(error)})