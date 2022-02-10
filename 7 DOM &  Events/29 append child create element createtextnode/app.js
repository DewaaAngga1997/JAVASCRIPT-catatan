function add(){
    var li = document.createElement("LI");
    li.style.background = "green";
    li.style.color = "white";
    li.id = "li";

    var input = document.getElementById("input").value;
    var text = document.createTextNode(input);
    li.appendChild(text);

    document.getElementById("myList").appendChild(li)
}



// anthor test
var myIMG = document.createElement("img");
myIMG.src = "logo.jpg";
myIMG.id = "img";
myIMG.style.width = "50%";

document.body.appendChild(myIMG);










