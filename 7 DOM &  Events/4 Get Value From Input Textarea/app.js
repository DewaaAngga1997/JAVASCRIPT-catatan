// input  |  select option |  textarea

function getValue(){
    // get show el
    var show = document.getElementById("Show");
    show.innerHTML = ''
    // get val from input
    var input = document.getElementById("input").value; 
    show.innerHTML += input;    
    
    // get val from textarea
    var textarea = document.getElementById("textarea").value; 
    show.innerHTML += textarea;   

    // get Selected option
    var option = document.getElementById("option").value; 
    show.innerHTML += option; 
}