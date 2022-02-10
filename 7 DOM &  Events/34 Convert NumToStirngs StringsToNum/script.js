 
// string to Number 
// Number to string
// parseFloat() string to float num
// parseInt() string to init num
// toString() is used to convert data of a number type to data of type text
// toFixed()  is used to round a number to the decimal number you want


// var number1 = 10;
// var number2 = "70.12";

// number1+= parseFloat(number2);

// console.log(number1);



function getValue(){
    var number1 = document.getElementById("input").value;
    var number2 = 5;
    var result = parseInt(number1) + number2 ;
    console.log(result);
  }

let number = 200.65;
// alert(number + 10);
alert(number.toFixed(0));