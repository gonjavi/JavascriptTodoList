import './style.css';
import { projectsModule } from './modules/projects';
import { stringify } from "querystring";

let date;
let chooseproject;
let proyectos = projectsModule.showProjects();
localStorage.setItem('proyectos', JSON.stringify(proyectos));
proyectos = JSON.parse(localStorage.getItem('proyectos'));


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

document.addEventListener('DOMContentLoaded', function() {
   chooseproject = document.querySelectorAll('select');
  var instances = M.FormSelect.init(chooseproject, {});
  //console.log(chooseproject);
});

projectLisLi();
document.getElementById('addpro').onclick = () => {
  projectsModule.addNewProject(); 
  addNewProjecttoList();
  location.reload();
  projectLisLi();
  
  
};

  const showprojects = document.getElementById('showprojects').getElementsByTagName('ul')[0];
 
  
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
    proyectos = JSON.parse(localStorage.getItem('proyectos'));
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

  

for (let i=0; i< proyectos.length; i++){
  document.getElementById(i).onclick = () => {
     if (todoInfo.hasChildNodes()){
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

function projectLisLi() {
  let proclist = document.getElementById('dropdown1');
  proyectos = JSON.parse(localStorage.getItem('proyectos'));
  
  if (proclist.hasChildNodes()){
    while(proclist.hasChildNodes()){
    proclist.removeChild(proclist.childNodes[0]);
   }
  
  } 
 for (let i=0; i < proyectos.length; i++){
  let option = document.createElement('option');
  let p = i +1; 
  option.innerHTML = 'Project'+p;
  option.value = p;
  proclist.appendChild(option);
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
  
 /*  if(chosenproject === '' || title === '' || description === '' || duedate === '')
  {
    ok = false;
    
  }
   if(ok == false){
    alert(msg);
  return ok;
  } */
  console.log(chosenproject);
  projectsModule.addNewTodo(chosenproject, title, description, duedate, priority);
}

projectsModule.addNewTodo(3,' title', 'description', '02-23-2020', 'urgent');