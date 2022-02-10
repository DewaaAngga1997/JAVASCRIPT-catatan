// for each with objects
let list = {name :'mock', age :'29', faild : 'teaching center'};

// first way using in
// for(var item in list){
//     // by this way for will but each kay of are object inside
//     // our item varable we can use it to get the value
//     console.log("key: ", item , "value: ", list[item])   
// }

// second way useing ForEach method 
// first we need to convert the object to array


// var keys = Object.keys(list)
// console.log(keys)
// // now we have new array insde variable keys
// keys.forEach(el =>{
//     console.log("value ", el)
// })

// better to use ForEach method if we have Objects with in object
let Users = {
    user1:{Name:"Ahemd", Role:"Admin", Status:"Active"},
    user2:{Name:"Hoda", Role:"User", Status:"DeActive"},
    user3:{Name:"Jack", Role:"Admin", Status:"Active"},
} 

Object.keys(Users).forEach(items =>{
    // // this will but the keys inside this items var
    //console.log(items)
    // console.log(Users[items])
   console.log("name :", Users[items].Name)
   console.log("role :", Users[items].Role)
   console.log("Status :", Users[items].Status)

})





