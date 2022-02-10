let text = "i Love JavaScript With Mock";


// The length property returns the length of a string.
// The length property of an empty string is 0.
let len = text.length;
document.getElementById("title").innerHTML = len



// The indexOf() method returns the position of the first occurrence 
// of a specified value in a string.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method is case sensitive.
let newText = "js is Great love js very Much"
let index = newText.indexOf("js");
//let index = newText.indexOf("is");
//let index = newText.indexOf("Mock");
document.getElementById("title").innerHTML = index

// The lastIndexOf() method returns the index (position) of the 
// last occurrence of a specified value in a string.
// The lastIndexOf() method searches the string from the end 
// to the beginning.
// The lastIndexOf() method returns the index from 
// the beginning (position 0).
// The lastIndexOf() method returns -1 if the value is not found.
// The lastIndexOf() method is case sensitive.
let lastindex = newText.lastIndexOf("js");
document.getElementById("title").innerHTML = lastindex




// The search() method searches a string for a value.
// The search() method returns the index (position) of a match.
// The search() method returns -1 if no match is found.
// The search() method is case sensitive.

let search = newText.search("Great")
document.getElementById("title").innerHTML = search;



// The startsWith() method returns true if a string starts 
// with a specified string.
// Otherwise it returns false.
// The startsWith() method is case sensitive.

let startWith = newText.startsWith("js");
//let startWith = newText.startsWith("JS");
document.getElementById("title").innerHTML = startWith;

//  The endsWith() method returns true if a string ends 
//  with a specified string.
//  Otherwise it returns false.
// The endsWith() method is case sensitive.

let endWith = newText.endsWith("Much");
//let endWith = newText.endsWith("much");
document.getElementById("title").innerHTML = endWith;




