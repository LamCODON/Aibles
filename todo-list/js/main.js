let input=document.querySelector('.todo-input');
let addBtn=document.querySelector('.todo-add');
let todoItems= document.querySelector('.todo-items')
let btnDelete= document.querySelectorAll('.btn-delete')
addBtn.onclick= function(){
    if(!input.value){
        alert("dcmm deo nhap thi add cai loz")
    }
    else addTodoItem(input.value);
}

function addTodoItem(value){
    let liItem=document.createElement('li')
    liItem.className="todo-item d-flex justify-content-between align-items-center py-2 ps-1 my-4";
    liItem.innerHTML=`
        <p class="m-0">${value}</p>
            <div class="todo-btn">
                <button class="btn-edit" onclick="editTodo(this)">edit</button>
                <button class="btn-delete" onclick="deleteTodo(this)">delete</button>
                <input type="checkbox" name="" id="checkTodo">
            </div>
    `
    todoItems.appendChild(liItem);
    input.value="";
}
function deleteTodo(e){
    e.parentElement.parentElement.remove();
}

function editTodo(e){
    let text=e.parentElement.previousElementSibling;
    if(e.innerText=="edit")
    {
        text.contentEditable = true;
        e.innerText='OK';
    }
    else if (e.innerText=="OK"){
        text.contentEditable = false;
        e.innerText='edit';
    }
}

function check(e){
    if(e.checked=true) {
        e.parentElement.parentElement.style.background='green';
    }
    else if(e.checked=false) {
        e.parentElement.parentElement.style.background='white';
    }
}




