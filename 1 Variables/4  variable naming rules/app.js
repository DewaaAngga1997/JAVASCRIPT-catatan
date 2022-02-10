/* 
variable naming rules

// The general rules for constructing names for variables (unique identifiers) are:
// ---------------------------------------------------------------------------------
// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter
// Names can also begin with $ and _ 
// Names are case sensitive (y and Y are different variables)
// Reserved words (like JavaScript keywords) cannot be used as names

*/

//// not correct

// var %name = "any";
// var /name = "any";
// var 22name = "any";

// // correct
// var name = "Mock";
// var $name = "Mock";
// var _name = "Mock";
// var name33 = "Mock";

// character diffrent Capital & small
var mock = "mock Javascript"
var Mock = "Mock new Js Coures"

document.write(mock)
console.log(Mock)

// we can't use any js keyword as vars names
// var var = "any"
// var if = "any"
// var switch = "any"
// var null = "any"
// var false = "any"






