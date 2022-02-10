 //  Event        -     addEventListener
//------------------------------------------
//  onchange     -     change    

// use with
// select , input , checkbox 


document.getElementById("color").addEventListener("change", ()=>{

    document.body.style.background = document.getElementById('color').value;
});

document.getElementById("checkbox").addEventListener("change",()=>{

    alert("Done !");
});


document.getElementById("password").addEventListener("input",()=>{
    alert("pass Change");
});