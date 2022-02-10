// ------------------------------------------------ -----------------------
// navigator.onLine is used to check if a user is online or not
// ------------------------------------------------ -----------------------
// Returns true or false, if a user is online, it will return true
// true/false
// ------------------------------------------------ -----------------------
// to execute commands when a user becomes online
// window.addEventListener('online',  );
// ------------------------------------------------ -----------------------
// to execute commands when a user is offline
// window.addEventListener('offline', );

let isOnline = navigator.onLine
console.log(isOnline)

// window.onoffline = ()=>{
//     alert("you are offline NoW!")
// }

// // window.addEventListener('offline',()=>{
// //     alert("you are offline NoW!")
// // } );

// window.addEventListener('online',()=>{
//     alert("You Are Online")
// } );
