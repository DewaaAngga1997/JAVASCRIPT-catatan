// submit() reset() focus() blur() 

document.getElementById("login").addEventListener("click", ()=>{
    document.getElementById("login_form").submit();    
})


document.getElementById("reset").addEventListener("click", ()=>{
    document.getElementById("login_form").reset();
    document.getElementById("pass").blur();
    document.getElementById("email").focus();
})







