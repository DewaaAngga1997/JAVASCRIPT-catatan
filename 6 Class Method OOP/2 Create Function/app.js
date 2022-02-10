// // function       
// function run_codes(){

//     alert("function is called");
// }


// // function return 
// function Re_Func() {
//   return "hello World";
// }

// var x = Re_Func();
// document.getElementById("test").innerHTML = x;

// function Parameters
function par(){
console.log(arguments)
console.log(arguments[0])
}

par(1,"2",false, ["a", "b", "c"]);

function num(a,b){
    return a+b;
}

var res = num(1,3);
document.getElementById("test").innerHTML = res;


