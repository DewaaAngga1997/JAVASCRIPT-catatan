// javascript console methods //

// log Outputs a message to the console
console.log("hay js")

//  assert()	Writes an error message to the console 
//              if the assertion is false

console.assert("any")
console.assert(MockVar)

var MockVar = "Mock Academy"
console.assert(MockVar)



// error()	Outputs an error message to the console
var AppError = "Server Error";
console.error(AppError)


// info()	Outputs an informational message to the console
console.info("any info msg")


// warn()	Outputs a warning message to the console
console.warn("Some thing not right happend!")

// clear()	Clears the console
console.clear()


// count()	Logs the number of times 
//          that this particular call to count() has been called

console.count("Fetching Data Opration")
console.count("Fetching Data Opration")
console.count("Fetching Data Opration")
console.count("Fetching Data Opration")
// ---------
// groupCollapsed()	Creates a new inline group in the console.
//                  However, the new group is created collapsed. 
//                  The user will need to use the disclosure 
//                  button to expand it

console.groupCollapsed("GroupName")
console.log("msg")
console.warn("Server missing")
// groupEnd()	Exits the current inline group in the console
console.groupEnd()

console.log("test")
// ---------


// group()	Creates a new inline group in the console. 
// This indents following console messages by an additional level,
// until console.groupEnd() is called

console.group("server msg")
console.warn("Server runing")
console.groupEnd()

// ------
// time()	Starts a timer (can track how long an operation takes)
console.time()
var el = `<h2> Mock Academy </h2>`;
document.write(el)
// timeEnd()	Stops a timer that was previously started by console.time()
console.timeEnd()
// ------









