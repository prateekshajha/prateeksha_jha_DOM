var form = document.querySelector('#addForm');
var ul =document.querySelector('#items');

console.log(form);
console.log(ul);

form.addEventListener('submit',addItem);  

function addItem(e){
    e.preventDefault()
    var newItem=document.getElementById('item').value;

    var li = document.createElement('li');

    li.className='list-group-item';

    li.appendChild(document.createTextNode(newItem));

    ul.appendChild(li);

    var deleteBtn=document.createElement('button');

    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'))

    li.appendChild(deleteBtn);

    ul.appendChild(li);
}

var li= document.getElementsByClassName('btn-sm float-right')
var editBtn=document.createElement('button');
editBtn.classname='btn btn-sm float-right';
editBtn.appendChild(document.createTextNode('Edit'));

for(let i=0;i<li.length;i++){
    li[i].appendChild(editBtn);
}
li.appendChild(editBtn);
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li= e.target.parentElement;
            ul.removeChild(li);
        }
    }
        
}

var filter=document.getElementById('filter');

filter.addEventListener('keyup',filterItems);

function filterItems(e){
    var text=e.target.value.toLowerCase();

    var items= ul.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';

        }
        else{
            item.style.display='none'
        }
    });


}