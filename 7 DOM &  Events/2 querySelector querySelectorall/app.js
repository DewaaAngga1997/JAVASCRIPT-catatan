// select elements by using querySelector  querySelectorall

// if we want select one element we can use 
// querySelector we can write the element name
// on that case this will give us the first element
// also we can selected by id or class name

// var header = document.querySelector("header");
// var header = document.querySelector("#header");
 var header = document.querySelector(".header");

header.innerHTML ="<h2>New Header data</h2>"

// we can select all element with specific name
// or class or id using querySelectorall

// var data = document.querySelectorAll("p") // using el name
// var data = document.querySelectorAll(".pa") // using class name
var data = document.querySelectorAll("p, main") // multiple elements by el name
// this will but our p element into array
console.log("data", data)

 data[2].style.color = "blue"
 data[4].style.color = "fuchsia"
for (let i = 0; i < data.length; i++) {
    data[i].innerHTML += "<i> Up </i>"
    if(i ==2 || i== data.length-1){
        continue
    }
    data[i].style.color = "red"
}




