var abc=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        serverresponsed=false;

        if(serverresponsed){
            console.log("Main Screen Dakhva...")
            resolve("Server responded successfully")
        }
        else{
            console.log("Server not available..")
            reject("Server not available")
        }


    },2000)
});

abc.then((mssg)=>{  
    console.log(mssg)
})
.catch((err)=>{
    console.log(err)
});


// serverresponsed=false;

// if(serverresponsed){
//     console.log("Main Screen Dakhva...")
// }
// else{
//     console.log("Server not available..")
// }

