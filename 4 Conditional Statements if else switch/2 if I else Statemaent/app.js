// if --
if (true) {
 alert("Yes")
}

if (false){
   console.log("No")
}

// 


var Name = "Mock";
var Score = 5;

if(Name == "Mock"){
    console.log("Name is", Name)
}

if(Name == "Mock" && Score > 6){
    console.log(Name, "Win")
}
// note that javascript condition logic is case sensitive 
if(Name != "mock"){
    console.log("New Msg")
}

// --





// else
if(false){
    console.log("Data")
} else {
    console.log("other data")
}

if(true){
    console.log(200)
} else {
    console.log(500)
}


// 

var NewName = "New";
var NewScore = 2;

if (NewName !== "New" && NewScore >5){ // false
    console.log("New Name Lose")
} else {
    console.log("Winner Name",NewName, "Score :", NewScore)
}

// .. we can write more than one conditin by using
//  else if

// --
if(NewName == "New" && NewScore >4){
  console.log("Winner", NewName)
} 
else if(NewName == "New" || NewScore >4 ){
  console.log("Player", NewName)
} 
else if(NewName == "New"){// will not work even if is true
    console.log("Check..")
} else {
    console.log("who are you")
}









