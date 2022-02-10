// The replace() method searches a string 
// for a value or a regular expression.
// The replace() method returns a new string with the value(s) replaced.
// The replace() method does not change the original string

let text = "I$Love$JavaScript. I Love Mock";
 text = text.replace("$", "  ");
// text = text.replace(/\$/g,"  ");
// text = text.replace(/Love/g , "Any")
// text = text.replace(/love/ , "Any")
// text = text.replace(/love/i , "Any")
// text = text.replace(/love/gi , "Any")

document.getElementById("title").innerHTML = text;


// The substring() method extracts characters, 
// between to indices (positions), from a string, 
// and returns the substring.
// The substring() method extracts 
// characters from start to end (excusive).
// The substring() method does not change the original string.

let NewText = "Mock JavaScript Course";
let sub = NewText.substring(5) // start
//let sub = NewText.substring(5, 9) // start & end 
document.getElementById("title").innerHTML = sub;









