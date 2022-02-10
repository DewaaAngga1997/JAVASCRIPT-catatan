// Promises

// resolve reject | then catch
let func = (isAuth)=>{
    return new Promise(function(resolve, reject){
        if(isAuth){
            setTimeout(() => {
                resolve("yes")                
            }, 3000);
        } else {
            setTimeout(() => {
                reject("No")                
            }, 5000);
        }
    })
}

func(true)
 .then((msg)=>{console.log(msg)})
 .catch((err)=>{console.log(err)})








// -- real example
let Server = (time,isOk,data)=>{
    return new Promise((resolve,reject)=>{
        if(isOk){
            let newdata = data + ":Resolved";
            // semiliting that we try to get data from server
            // and this will take a time
            setTimeout(() => {
                resolve(newdata)                
            }, time);
        } else {
            let msg = new Error("Server Error")
            reject(msg)
        }
    });
}

Server(3000,true,"Mock")
 .then((response)=>{
     console.log("res", response)
 })
 .then(()=>{
     console.log("Done !")
 })
 .catch((err)=>{
     console.error(err)
 })
 .finally(()=>{ // finally will always work after all
     console.log("LogOut..")
 })








