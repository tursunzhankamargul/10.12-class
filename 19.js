const todoList = document.getElementById('todoList');
const addButton = document.getElementById('addButton');
const searchButton=document.getElementById('searchButton');

addButton.addEventListener('click', ()=>{
    const taskInput=document.getElementById('taskInput');

  if(taskInput.value !== ''){  
    const task = document.createElement('li');
    const span =document.createElement('span');
    const deleteButton=document.createElement('button');

    deleteButton.textContent='Delete'; 
    span.textContent=taskInput.value;
    taskInput.value="";

    task.style.width='200px';
    task.style.display='flex';
    task.style.justifyContent='space-between';
    task.style.background='#d1d1d1';
    task.style.padding='5px';

    task.appendChild(span);
    task.appendChild(deleteButton);
    todoList.appendChild(task);

    task.addEventListener('dbclick',()=> {
        const changeName= document.createElement('input');
        changeName.placeholder='Change name';

        task.replaceChild(changeName,span);

        changeName.addEventListener('blur',()=>{
            span.textContent=changeName.value;

            task.replaceChild(span,changeName);
        });

    });

  }

});

searchButton.addEventListener('click',()=> {
    const searchInput= document.getElementById('searchInput');

    const tasks= document.querySelectorAll('li');

    tasks.forEach((task)=>{
      if (!task.textContent.includes(searchInput.value)){
        task.style.display='none';

      } else{
        task.style.display='flex';
      } 
    });
});