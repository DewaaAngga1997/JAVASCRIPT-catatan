var a=1;

var int = setInterval(() => {
    console.log(a++)
}, 500);

setTimeout(() => {
    clearInterval(int)
}, 2000);




var myInterval;
var counter = 0;
document.getElementById("in").onclick = ()=>{
    myInterval = setInterval(()=>{
        counter = counter + 1;
      document.getElementById("test").innerText = counter;
      if(counter == 10){
        clearInterval(myInterval)
        alert("done ")
      }
     },1000)
}