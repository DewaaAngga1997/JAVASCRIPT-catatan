class MyPage{

    constructor(){
        var text = document.getElementById("text");
        text.addEventListener("copy",()=>{
        this.copy();
        });

       var input = document.getElementById("input");
       
       input.addEventListener("paste",()=>{
        this.paste();
       });

       input.addEventListener("cut",()=>{
        this.cut();
       });

    }

    copy(){
        alert("text copyid");
    }

    paste(){
        alert("text has been pasted");
    }

    cut(){
        alert("Text has been clipped");
    }
}

onload = new MyPage();


function copy(){
        alert("text copyid");
}

function paste(){
    alert("text has been pasted");
}

function cut(){
    alert("Text has been clipped");
}

// oncopy = copy when copying
// onpaste = paste
// oncut = cut when cut