// // An array is a special variable, which can hold more than one value:
// // [] brackets, square bracket


// // define array
[]
// add values to the array and put it on a varaible
 var arr = ["Hay Js", 10, false, ["js","html"]]

console.log(arr)
// get sepcific index 
console.log(arr[0])  // we start count from 0
console.log(arr[1])
console.log(arr.length)
console.log(arr.length -1)   // get the last element index num
console.log(arr[arr.length -1]) // get the last element
console.log(arr[3][0])  // get data from array with in array
console.log(arr[20])  // undefined

// // --- update array
var data = ["hay", true, 10 , false, ["php", "MySql", false]];

data[0] = 100;
data[1] = "Mock Academy";
data[4][2] = "CSS";

console.log(data)

// -- delete 
delete data[0]
console.log(data)
// -- delete using splice

 data.splice(0 , 4)  // start index to end index
console.log(data)


//  push() method adds a new element to an array (at the end):
//  shift() method returns the value that was "shifted out":
//  unshift() method adds a new element to an array (at the beginning)
//  and "unshifts" older elements:
let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("Kiwi")
fruits.shift()
fruits.unshift("lemon")
console.log(fruits);


// check if is Array

var simple = ["Go", "js", true, 10, "mock", ["php",5]];
var bool= false;

console.log(Array.isArray(simple))
console.log(Array.isArray(bool))

//use forEach to Loop the data with in array

var list = ["js", "php", "Golang", "C#"];
var count = 0
list.forEach(item =>{
    count++
    console.log("count:",count)
    console.log(item)
})

var languages = ["javaScript", "php", "Golang", "C#", "java"]

languages.forEach(language =>{
    document.getElementById("list").innerHTML += `
      <li>${language}</li>
    `;
})







