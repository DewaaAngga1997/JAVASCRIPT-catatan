//  event        -     addEventListener
// -------------------------------------------
//  onsubmit     -     submit   
// --------------------------------------------
//  preventDefault()

let email_form = document.getElementById("email_form");
email_form.addEventListener("submit",(error)=>{

    let email = document.getElementById("email");

    if(email.value.indexOf("@gmail") != -1){

        return true;

    }else{
        email.style.borderColor = "red";
        document.getElementById("email_error").innerHTML = 
        "Invalid email, put email from";
        error.preventDefault();
    }
   

});





















