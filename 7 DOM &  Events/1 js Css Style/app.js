// javascript css style

// we can get any uniqe element by write that element directly
// after document method

/* 
when we write css code style using js style
we Have Specifc standerd We Simply replace - with writing the 
next Charactar Capital ..

for example on css file we have
background-image
on style js we have
backgroundImage

on css
border-bottom-color
on js style
borderBottomColor
..
*/

let body = document.body;
body.style.backgroundImage = "linear-gradient(to left, #fb9c1b, #ff5722)";
// let's center the img using js style
let logo = document.getElementById("logo");

logo.style.width = "400px";
logo.style.position = "absolute";
logo.style.top = "50%";
logo.style.left = "50%";
logo.style.transform = "translate(-50%, -50%)"



