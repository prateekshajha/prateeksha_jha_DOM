

console.log("Hello !")
console.dir(document);
console.log(document.domain)
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.images)

var title= document.getElementById("header-title");

title.textContent="New"
console.log(title)

title.innerText="Item Lister Updated"
console.log(title)


var header=document.getElementById("main-header");
header.style.border="solid 3px black";

var add_item=document.getElementsByClassName("title")[0];

console.log(add_item)
add_item.style.color="green";
add_item.style.fontWeight = 700;
