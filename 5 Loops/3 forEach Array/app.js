// // forEach loop With array

 let MyHobbies = ["Football", "Paint", "drive", "Coding"]
// first Way  using in key word 
for(var index in MyHobbies){
 alert("round : "+index)
 console.log("index", index);
 // by using in key work for will retrun to us the list 
 // of our indexes number one by one we can use it to get 
 // the array elements dynamiclly

 console.log(MyHobbies[index])
}

// Second Way using forEach() Method
// The forEach() method calls a function for each element in an array.
MyHobbies.forEach(el => {
    console.log(el);
    // useing this way we can directlly get the array element
    document.getElementById("ForEach").innerHTML += `
     <li>${el}</li>
    `
})







