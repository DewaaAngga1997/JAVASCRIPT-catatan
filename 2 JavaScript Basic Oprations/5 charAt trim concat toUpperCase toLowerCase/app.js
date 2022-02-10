// The toUpperCase() method converts a string to uppercase letters.
let text = "welcome to mock academy js course.";
text = text.toUpperCase()

document.getElementById("title").innerHTML = text;




// The toLowerCase() method converts a string to lowercase letters.
text = text.toLowerCase()
document.getElementById("title").innerHTML = text



// The concat() method joins two or more strings.
let firstName = "Mcok"
let lastName = "Academy"

let Name = firstName.concat(lastName);
// we can also do it by this way
// let Name = firstName + lastName

document.getElementById("title").innerHTML = Name;


// The trim() method removes whitespace from both sides of a string.
let NewText = "          test welcome to mock academy js course.    ";
NewText = NewText.trim()
document.getElementById("title").innerHTML = NewText;


// The charAt() method returns the character 
// at a specified index (position) in a string.

let MockText = "mock Aacdemy";
let index = MockText.charAt(10)

document.getElementById("title").innerHTML = index;





