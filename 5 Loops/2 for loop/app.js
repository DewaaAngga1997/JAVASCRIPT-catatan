
// For Loop

// The for loop has the following syntax:
// for (statement 1; statement 2; statement 3) {
//   // code block to be executed
// }
// Statement 1 is executed (one time) 
// before the execution of the code block.

// Statement 2 defines the condition 
// for executing the code block.

// Statement 3 is executed (every time) 
// after the code block has been executed.

for (let count = 0; count <=5; count++) {
    console.log("Number", count)
}



// real world ex
let array = ["JavaScript","HTML", "Java", "C++", "C#", "Golang", "PHP"]

for (let index = 0; index < array.length; index++) {
     let langNames = array[index];
     // use if else & else if statemnents
     if(langNames == "JavaScript"){
        document.getElementById("for").innerHTML += `First Lang :
         ${langNames} <br>` 
     } else if(langNames == "HTML") { //use continue 
        continue
     } 
     else if (langNames == "Golang"){
        document.getElementById("for").innerHTML += `Last Lang :
        ${langNames} <br>` 
        break
     }
      else {
        document.getElementById("for").innerHTML += `Lang : ${langNames} <br>` 
     }
}




