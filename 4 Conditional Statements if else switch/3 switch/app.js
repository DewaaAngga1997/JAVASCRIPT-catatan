// switch
var x = 5;
switch (x) {
    case 1:
        console.log("case 1 x=", x)
    case 3:
        console.log("case 3 x=", x)
    case "5":
        console.log("case 5 string x=", x)
    case 5:
        console.log("case 5 int x=", x)

}
//if we have correct case multiple times will excute in both cases
switch (x) {
    case 5:
        console.log("case 1 x=", x)
    case 5:
        console.log("case 2 x=", x)
}

// Use Break
switch (x) {
    case 5:
        console.log("case 1 x=", x)
        break;
    case 5:
        console.log("case 2 x=", x)
}

// Default
switch (x) {
    case 3:
        console.log("case 1 x=", x)
        break;
    case "5":
        console.log("case 2 x=", x)
        break;
    case 4:
        console.log("case 3 x=", x)
        break; 
    default: // if we did't add break default will always excute 
        console.log("Default",x )
        break;
    }

