// we can test it directly on the browser console
alert(location.pathname);
// location.protocol  Return the protocol of the current URL:
// location.href returns the href (URL) of the current page
// location.hostname returns the domain name of the web host
// location.pathname  return the domain name and the current url

// location.assign loads a new document
// locatio.replace();
// location.reload();

function reload(){
    location.reload();
}
function assign(){
    location.assign("https://www.google.com/"); 
}
function replace(){
    location.replace("Next.html");
}

