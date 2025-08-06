const todolist =[
  {name:'make dinner',
  dueDate: 20-2-22},
  {name:'wash clothes',
  dueDate:2022-12-22
}];
renderTodoList();
function renderTodoList(){
let todolistHTML = '';
for(let i =0;i<todolist.length;i++){
  const todoobject = todolist[i];
  const {name,dueDate} = todoobject;
  //const duedate = todoobject.duedate;
  const html  = `
   <div> ${name}</div> 
   <div>${dueDate}</div> 
    <button onclick = "
      todolist.splice(${i},1);
      renderTodoList();
      "class = "delete-todo-button"
    >Delete</button>`;
  todolistHTML += html;


}
document.querySelector('.js-todo-list')
  .innerHTML = todolistHTML;
}

function addTodo(){

  const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;
   const dateinputelement = document.querySelector('.js-date-input');
   const dueDate = dateinputelement.value;
   todolist.push({
    name,
    dueDate

});
   inputElement.value = '';
   renderTodoList();

}