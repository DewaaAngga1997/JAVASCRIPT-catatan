// methods of classList             -           func
// --------------------------------------------------------------------------------------
// add(class1, class2, ...)	 add one class or many to the selected element
// contains(class)	       check for specific class name on the selected element
// remove(class1, class2, ...)	   remove one or more classes on the selected el
// item(index)	        select the class index
// length               select the class numbers
// --------------------------------------------------------------------------------------

// document.getElementById("content").classList.add("text","text2");

// var isContains = document.getElementById("content").classList.contains("div3");
// alert(isContains);

// document.getElementById("content").classList.remove("div2","div3");

// alert(document.getElementById("content").classList.item(3));

// alert(document.getElementById("content").classList.length);

// document.getElementById("content").classList.add("text");

document.getElementById("button1").onclick = ()=>{
    document.getElementById("content").classList.remove("text");
    };