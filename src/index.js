import { stringify } from 'querystring';
import { projectsModule } from './modules/projects';
import init from './modules/init';

const date = init();
let proyectos = projectsModule.showProjects();
localStorage.setItem('proyectos', JSON.stringify(proyectos));
proyectos = JSON.parse(localStorage.getItem('proyectos'));

let selectedPro;
document.getElementById('dropdown1').addEventListener('change', function () {
  selectedPro = this.value;
});
let selectedProDelete;
document.getElementById('dropdown2').addEventListener('change', function () {
  selectedProDelete = this.value;
});

document.getElementById('addpro').onclick = () => {
  const pname = document.getElementById('pname').value;
  let ok = true;
  const msg = 'Please enter the project name:\n';
  if (pname === '') {
    ok = false;
  }
  if (ok === false) {
    alert(msg);
    return ok;
  }
  let index = projectsModule.addNewProject(pname);
  addNewProjecttoList(pname, index);
  window.location.reload();
  projectLisLi();
  return true;
};

const showprojects = document.getElementById('showprojects').getElementsByTagName('ul')[0];

function defaultProjects() {
  let proyectos = projectsModule.showProjects();
    for (let i=0; i< proyectos.length; i += 1) {
      let newA = document.createElement('a');
      newA.innerHTML = proyectos[i].name;
      let n = document.createElement('li');
      n.appendChild(newA);
      n.id = i;
      n.style.color =' black';
      showprojects.appendChild(n);
    }
  }
  function addNewProjecttoList(pname, index) {
    proyectos = JSON.parse(localStorage.getItem('proyectos'));
    var newA = document.createElement('a');
    newA.innerHTML = pname;
    let n = document.createElement('li');
    n.appendChild(newA);
    n.id = index;
    n.style.color = 'black';
    showprojects.appendChild(n);
    showprojects.removeChild(showprojects.childNodes[0]);
  }

defaultProjects();

for (let i = 0; i < proyectos.length; i += 1) {
  document.getElementById(i).onclick = () => {
     if (todoInfo.hasChildNodes()){
      while (todoInfo.hasChildNodes()) {
      todoInfo.removeChild(todoInfo.childNodes[0]);
      }
    } 
    todos(i);
  };
}
const showtodos = document.getElementById('todos');
let todoInfo = document.createElement('div');

function todos(index) {
  const todos = projectsModule.showTodos(index);
  proyectos = JSON.parse(localStorage.getItem('proyectos'));
  const divprotitle = document.getElementById('protitle');
  divprotitle.innerHTML = proyectos[index].name;
  for (let i = 0; i < todos.length; i += 1) {
    const title = document.createElement('h5');
    title.innerHTML = todos[i].title;
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
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
  const proclist = document.getElementById('dropdown1');
  proyectos = JSON.parse(localStorage.getItem('proyectos'));

  if (proclist.hasChildNodes()) {
    while (proclist.hasChildNodes()) {
      proclist.removeChild(proclist.childNodes[0]);
    }
  }
  proyectos.forEach(function(proyecto) {
    let option1 = document.createElement('option');
    option1.innerHTML = proyecto.name;
    option1.value = proyectos.indexOf(proyecto);
    proclist.appendChild(option1);   
  });
}
projectLisLi();
// create a todo
document.getElementById('submit').onclick = () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const duedate = date.value;
  const priority = document.querySelector('.priority:checked').value;
  let ok = true;
  const msg = 'Please enter all the information for the Todo:\n';

  if (selectedPro === '' || title === '' || description === '' || duedate === '') {
    ok = false;
  }
  if (ok === false) {
    alert(msg);
    return ok;
  }

  projectsModule.addNewTodo(selectedPro, title, description, duedate, priority);
  return true;
};

function deleteProject() {
  const proclist1 = document.getElementById('dropdown2');
  proyectos = JSON.parse(localStorage.getItem('proyectos'));

  if (proclist1.hasChildNodes()) {
    while (proclist1.hasChildNodes()) {
      proclist1.removeChild(proclist1.childNodes[0]);
    }
  }
  proyectos.forEach(function(proyecto) {
    let option1 = document.createElement('option');
    option1.innerHTML = proyecto.name;
    option1.value = proyectos.indexOf(proyecto);
    proclist1.appendChild(option1);
  });
}

deleteProject();

document.getElementById('delete').onclick = () => {
  projectsModule.deleteProject(selectedProDelete);
  window.location.reload();
};