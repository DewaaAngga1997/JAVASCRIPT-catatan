// document page element
// document.URL            get page url
// document.documentURI    get page url
// document.domain         get doain name 
const url = document.URL;
document.write("URL : " + url);

// document title body head
let title = document.title;
document.title = "MockAcademy";
document.head.innerHTML += "<style> body{background:red;}</style>";

document.body.onload = ()=>{
alert("Page Load");
};


// document images forms links
// document.images                   select images elements on the dom
// document.embeds                   select embeds elements on the dom
// document.links                    select links elements on the dom 
// document.forms                    select forms elements on the dom
// length                            get the number of the selected el
// -----------------------------------------------------------------------------

for(var items in document.images){
    document.images[items].src = "logo.jpg";
    document.images[items].width = "200";
    }
    console.log(document.forms.length);

