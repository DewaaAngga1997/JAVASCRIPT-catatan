
// onload = ()=>{
//         alert("load page");
// };

// onload = function(){
//     alert("load page");
// }

// onload = function run_codes(){
//     alert("load page"); 
// }

// var button1 = document.getElementById("button1");
// button1.onclick = ()=>{
//     alert("click done");
// }

// ------------
class App{
    constructor(){
        document.getElementById("text").onclick = ()=>{
         this.run_codes();   
        };
    }

    run_codes(){
        alert("run func");
    }
}

onload = new App(); 