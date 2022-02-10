// Async Await
// async makes a function return a Promise
// await makes a function wait for a Promise

let load =(Auth)=>{
   return new Promise(function(resolve, reject) {
        setTimeout(() => {
            let lang = ['Go', 'js', 'ruby'];
            if(Auth){
                resolve(lang)
            } else {
                reject(new Error("Not Auth"))
            }
        }, 3000);
      });
}

async function asTest(){
    try{
        let myPromise = await load(false);
        console.log('us it insdie async function', myPromise)
        return  myPromise;
    }
    
    catch(error){
        console.log('handle it on the async func', error)
        return error;
    }
    
    finally {
        console.log("it will run any way")
    }

}
// -- it will return promise

let result = asTest()
console.log('res', result)

result.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.error("error", error)
})










