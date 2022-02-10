// var
{
    var Name = "Mock"
    
        Name="NewMock"
        console.log("name In scope", Name)
    
}

console.log("Name Out Scope", Name)

// let

{
    let Email = "Mock@email"
    
        Email="new"
        console.log("Email In scope", Email)
    
}
console.log("Email Out Scope", Email)


/// const

{
    const PassWord = "123";

    PassWord = "New555";
    console.log("PassWord In scope", PassWord)
     
}

console.log("PassWord Out Scope", PassWord)


