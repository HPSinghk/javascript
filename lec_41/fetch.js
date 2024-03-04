
    fetch('http://time.jsontest.com')
    .then((data)=>{
        return data.json()
    })
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{console.log(error)})

    console.log("dekhte hai ye fetch se phle aata hai ya nhi")
