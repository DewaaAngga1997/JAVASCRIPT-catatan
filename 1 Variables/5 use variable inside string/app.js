//// use backquote `  to mix vars with strings

var Name = "Mock Academy"
var html = `
  ${Name}
  ${2+3}
  <h1 style="color:red"> Welcome to : </h1>
  <p> JavaScript
`

document.write(html)

