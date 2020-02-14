import './style.css';
import { projectsModule } from './modules/projects';

let date;
let chooseproject;

document.addEventListener('DOMContentLoaded', function() {
  date = document.querySelector('.datepicker');
  var instances = M.Datepicker.init(date, {});
  //console.log(date);
});
document.addEventListener('DOMContentLoaded', function() {
   chooseproject = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(chooseproject, []);
  //console.log(chooseproject);
});

document.getElementById('addpro').onclick = () => {
  projectsModule.addNewProject(); 
  addNewProjecttoList();
  projectLisLi();
};
  const showprojects = document.getElementById('showprojects').getElementsByTagName('ul')[0];
  //let proyectos = projectsModule.showProjects();
  
  function defaultProjects() {
    let proyectos = projectsModule.showProjects();
    for (let i=0; i< proyectos.length; i++){
      let newA = document.createElement('a');
      newA.innerHTML = proyectos[i].name;
      let n = document.createElement('li');
      n.appendChild(newA);
      n.id = i;
      n.style.color =' black';
      showprojects.appendChild(n);
    }
  }
  function addNewProjecttoList() {
    var proyectos = projectsModule.showProjects();
    var l = 0;
    l = proyectos.length -1;
    l++;
    var newA = document.createElement('a');
    newA.innerHTML = 'Project'+[l];
    let n = document.createElement('li');
    n.appendChild(newA);
    n.id = l;
    n.style.color =' black';
    showprojects.appendChild(n);
    showprojects.removeChild(showprojects.childNodes[0]);
  }

  defaultProjects();

let proyectos = projectsModule.showProjects();
for (let i=0; i< proyectos.length; i++){
  
  document.getElementById(i).onclick = () => {
     if (todoInfo.hasChildNodes()){
      //let count = todoInfo.childElementCount;
      while(todoInfo.hasChildNodes()){
      todoInfo.removeChild(todoInfo.childNodes[0]);
      }
    } 
    todos(i);
  
  };
}
const showtodos = document.getElementById('todos');
let todoInfo = document.createElement('div');

function todos(index) {
  let todos = projectsModule.showTodos(index);
  
  let divprotitle = document.getElementById('protitle');
  divprotitle .innerHTML = 'Project'+[index+1];
  
  
  for (let i=0; i< todos.length; i++){
    let title = document.createElement('h5');
    title.innerHTML = todos[i].title;
    
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    p1.innerHTML = todos[i].description;
    p2.innerHTML = todos[i].duedate;
    p3.innerHTML = todos[i].priority;
    todoInfo.appendChild(title);
    todoInfo.appendChild(p1);
    todoInfo.appendChild(p2);
    todoInfo.appendChild(p3);
    
    showtodos.appendChild(todoInfo);

  }
}


// list of projects dropdown


projectLisLi();
 
function projectLisLi() {
  let proclist = document.getElementById('dropdown1');
  let proyectoss = projectsModule.showProjects();
  
  if (proclist.hasChildNodes()){
    while(proclist.hasChildNodes()){
    proclist.removeChild(proclist.childNodes[0]);
   }
  
  } 
 for (let i=0; i < proyectoss.length; i++){
  let li = document.createElement('li');
  let p = i +1;
  let a = document.createElement('a');
  a.innerHTML = 'Project'+p;
  li.appendChild(a);
  proclist.appendChild(li);
 }
}


// create a todo

document.getElementById('submit').onclick = () => {
  let chosenproject = chooseproject.value;
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let duedate = date.value;
  let priority = document.querySelector('.priority:checked').value;
  var ok = true;
  var msg = 'Please enter all the information for the Todo:\n';
  
  if(chosenproject === '' || title === '' || description === '' || duedate === '')
  {
    ok = false;
    
  }
   if(ok == false){
    alert(msg);
  return ok;
  }
  //console.log(chooseproject);
  projectsModule.addNewTodo(chosenproject, title, description, duedate, priority);
}

