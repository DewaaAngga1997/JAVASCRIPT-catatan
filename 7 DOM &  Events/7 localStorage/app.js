// -------------------------------------------------------------------------------
// You can store data up to 5 or 10 MB in the browser depending on the type of browser
// You can access the data stored in all pages belonging to the same domain
// Delete the data stored within the local storage can be via delete browser
// or delete data via javascript commands or delete it manually from the browser
// The data that is stored is converted to string datatype  


// localStorage.setItem("course","ES");
// localStorage.setItem("name","JavaScript");
// localStorage.removeItem("course");
// localStorage.clear();

// localStorage.setItem("number",21.10);
// let number = parseFloat(localStorage.getItem("number"))
// console.log( number + 20)

// localStorage.setItem("array" , ["Arabic","Kurdish","Dutch","English"])
// var array = localStorage.getItem("array").split(",")
// console.log(array)

// var data = {name:"Mock",age:10};
// localStorage.setItem("data", JSON.stringify(data));
// var data = JSON.parse(localStorage.getItem("data"))
// console.log( data.name)



document.getElementById("color").onchange = function(){
    localStorage.setItem("color", document.getElementById("color").value);
    document.body.style.background = localStorage.getItem("color");
    }
    
    if(localStorage.getItem("color")!=null ){
        document.body.style.background = localStorage.getItem("color");
        document.getElementById("color").value = localStorage.getItem("color");
    }