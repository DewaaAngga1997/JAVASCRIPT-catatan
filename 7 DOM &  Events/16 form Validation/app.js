
//  event        -     addEventListener
//---------------------------------------------
//  oninvalid    -     invalid 
//  oninput      -     input    

// --------------------------------------------


// setCustomValidity()                              
// validationMessage                 
// validity.typeMismatch   
// validity.valueMissing                    


let email_input = document.getElementById("email");
email_input.addEventListener("invalid", ()=>{ input_error();});
email_input.addEventListener("input", ()=>{  input_error();});


function input_error(){
    if(email_input.validity.valueMissing){
        email_input.setCustomValidity("plase set any data");
    }else if(email_input.validity.typeMismatch){
        email_input.setCustomValidity("invaid data");
    }else{
        email_input.setCustomValidity("");
        return true;
    }  
document.getElementById("error_message").innerText = email_input.validationMessage;
}













