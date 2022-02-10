/*
The outerHTML property sets or returns the 
HTML element and all it's content, 
including the start tag, it's attributes, 
and the end tag.
*/
let header = document.getElementById("header");
// alert(header.outerHTML)
// header.outerHTML = "<h2>Love Js </h2>"


/*
The outerText property sets or returns the text 
content of the specified node.
This property is similar to the inner innerText property, 
in fact getting the outerText returns 
the same result as getting the innerText property.

There are an important difference when 
setting an element's outerText, 
because the element itself is removed.
*/

// alert(header.outerText)
// header.outerText = "<h2> Change the text </h2>"

/*
The innerHTML property sets or returns 
the HTML content (inner HTML) of an element.
*/

// alert(header.innerHTML)
// header.innerHTML = "<h2>innter html </h2>"



/*
The innerText property sets or returns 
the text content of the specified node, 
and all its descendants.

If you set the innerText property, 
any child nodes are removed and replaced by a single Text 
node containing the specified string
*/

// alert(header.innerText)
// header.innerText = "<h2>innter Text </h2>"
