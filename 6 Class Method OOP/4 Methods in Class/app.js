
// add/use Method in the class 
class App{
    constructor(){
        
    // this.change_background(); 
    // this.addnewtext('constractor data') 
    
    // var msg = this.getMessage("JavaScript")
    // document.body.innerHTML = msg;
    }
    change_background(){ // no prams
       document.body.style.background = "red";
    }
    addnewtext(text){ // with prams
        document.body.innerHTML = "new : "+text;
    }
    getMessage(data){// method return with params | use if
        if(data == "JavaScript"){
            return data + " Done!"
        } else {
            return data + " Not Yet !"
        }
        
    }

}

var app_object = new App();
//app_object.change_background();
//app_object.addnewtext("hello World")

// var msg = app_object.getMessage("ES6")
// console.log(msg)


