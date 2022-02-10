// Event - addEventListener
// ------------------------------------------------ ---------
// onkeyup - keyup to execute commands when one of the keyboard buttons is clicked and a finger is lifted
// onkeydown - keydown to execute commands by simply clicking on one of the keyboard buttons
//-------------------------------------
// to execute commands by simply clicking on one of the keyboard buttons - it works only on the letters and numbers buttons
// onkeypress - keypress
//-------------------------------------
// method : key code


document.addEventListener("keyup",(event)=>{
  if(event.key === "Enter"){
    alert("You clicked the Enter button keyup");
  }

});

document.addEventListener("keydown",(event)=>{
  if(event.key === "a"){
    alert("You clicked the (A) button keydown");
  }

});

function run_key(event){
  if(event.key == "1"){
  location.reload();
  }
  if(event.code === "KeyB"){
  alert(event.code);
  }
   alert(event.key);
}
