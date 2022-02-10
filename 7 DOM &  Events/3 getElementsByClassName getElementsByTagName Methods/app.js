// HTML DOM getElementsByTagName() Method
// HTML DOM getElementsByClassName() Method

var El_ByTagName = document.getElementsByTagName("h3")[1]; // select h3 tag on index 1
El_ByTagName.innerHTML += " New ";

var El_ByClassName = document.getElementsByClassName("HP")[2]; // this will give us first p tag
El_ByClassName.style.color = "red"


// we can get all by class name or tag name then loop it
var AllByTagName = document.getElementsByTagName("h3");
for (let i = 0; i < AllByTagName.length; i++) {
    AllByTagName[i].innerHTML += "UPDATED";
    AllByTagName[i].style.border = "2px solid gray"
}

var AllByClassName = document.getElementsByClassName("HP");
for (let i = 0; i < AllByClassName.length; i++) {
    AllByClassName[i].innerHTML += " :";
    AllByClassName[i].style.color = "fuchsia"
}


