// objects data type allow us to save 
// data type of arrays, boolean, string, number, 
// function return, objects, using key and value 

var obj = {
    name:"Mock", 
    age:25, 
    working :true,
    language:["javascript", "C#", "C++", "php"],
    myfunction: function(){
        return this.name + ": " + this.language[0] +" "+"course";
    }
}
// use
console.log(obj.name);
console.log(obj["name"]);
console.log(obj.language[3])
console.log(obj.myfunction())
// change
obj.name = "New Name";
console.log(obj);
// delete
delete obj.name;
console.log(obj)

// add new
obj.NewKey = "New Key Data"
console.log(obj)


// create obj inside obj
var Users = {
    user1 :{name:"Ahmed", email:"Ahmed@gmail.com"},
    user2 :{name:"jack", email:"jack@gmail.com"},
    user3 :{name:"sara", email:"sara@gmail.com"},
}

console.log(Users.user1);

alert(Users.user2.email);
alert(Users.user3.email);
alert(Users["user1"]["name"])




