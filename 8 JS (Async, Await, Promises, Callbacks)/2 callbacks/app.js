// callback


// start by this test

function First(){
    console.log("First")
}

function Second(){
    console.log("Second")
}

First()
Second()
// then 
Second()
First()
// -- end of test

// --
function First(call){
    call();
    console.log("First")
}

function Second(){
    console.log("Second")
}

First(Second);
// --

// -- arrow function
let first = (arg1, arg2)=>{
    setTimeout(() => {
        arg1()

        setTimeout(() => {
         arg2()    
        }, 3000);

    }, 2000);
    
    console.log("first")
}

let second = ()=>{
    console.log("Secod")
}

let last = ()=>{
    console.log("Last")
}

first(second, last)

first(last, second)







