// // craet class and use it

class App{
    constructor(){
      alert("constructor called") ;
    }
}

onload = new App();
var app_object = new App();
var app_object2 = new App();

// parameters constructor
// this keyword
class Car {
    constructor(name, price) {
      this.name = name +" by Mock";
      this.price = price +price/10 + "With Tax";
    }
  }
  
  
  const bm = new Car("BMW", 20000);
  console.log(bm, bm.price)
  document.body.innerHTML = "<p>" + bm.name + ", " + bm.price +"</p>";

  const te = new Car("Tesla", 15000);
  document.body.innerHTML +="<p>" + te.name + ", " + te.price +"</p>";









