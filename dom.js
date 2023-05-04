

// console.log("Hello !")
// console.dir(document);
// console.log(document.domain)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.images)

// var title= document.getElementById("header-title");

// title.textContent="New"
// console.log(title)

// title.innerText="Item Lister Updated"
// console.log(title)


// var header=document.getElementById("main-header");
// header.style.border="solid 3px black";

// var add_item=document.getElementsByClassName("title")[0];

// console.log(add_item)
// add_item.style.color="green";
// add_item.style.fontWeight = 700;

// var list_items=document.getElementsByClassName("list-group-item");

// console.log(list_items);

// list_items[2].style.backgroundColor="yellow";

// for(let i=0;i<list_items.length;i++){
//     list_items[i].style.fontWeight="bold";
// }

// var list2=document.getElementsByTagName("li")
// for(let i=0;i<list2.length;i++){
//     list2[i].style.color="red";
// }

var li=document.querySelectorAll('li');
var li_odd=document.querySelectorAll('li:nth-child(odd)');
console.log(li);
console.log(li_odd);

li[1].style.color="green";


for(let i=0;i<li_odd.length;i++){
    li_odd[i].style.backgroundColor="green";
}
