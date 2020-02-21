import 'materialize-css';
import M from 'materialize-css/dist/js/materialize.min';

import {
  showProjects,
  addNewProject,
  showTodos,
  addNewTodo,
  deleteProject,
  deleteTodo,
  editTodo,
} from './modules/projects';


let date;
let chooseproject;
let proyectos = showProjects();
localStorage.setItem('proyectos', JSON.stringify(proyectos));
proyectos = JSON.parse(localStorage.getItem('proyectos'));

/* $(document).ready = () => {
  $('.datepicker').datepicker('date', date);
}; */

document.addEventListener('DOMContentLoaded', () => {
  date = document.querySelector('.datepicker');
  M.Datepicker.init(date, {});
});

document.addEventListener('DOMContentLoaded', () => {
  chooseproject = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(chooseproject, {});
});

document.addEventListener('DOMContentLoaded', () => {
  chooseproject = document.querySelectorAll('select');
  M.FormSelect.init(chooseproject, {});
});
let selectedPro;
document.getElementById('dropdown1').addEventListener('change', () => {
  selectedPro = document.getElementById('dropdown1').value;
});
let selectedProDelete;
document.getElementById('dropdown2').addEventListener('change', () => {
  selectedProDelete = document.getElementById('dropdown2').value;
});

const showprojects = document.getElementById('showprojects').getElementsByTagName('ul')[0];

function defaultProjects() {
  const proyectos = showProjects();
  for (let i = 0; i < proyectos.length; i += 1) {
    const newA = document.createElement('a');
    newA.innerHTML = proyectos[i].name;
    const n = document.createElement('li');
    n.appendChild(newA);
    n.id = i;
    n.style.color = 'black';
    showprojects.appendChild(n);
  }
}
function addNewProjecttoList(pname, index) {
  proyectos = JSON.parse(localStorage.getItem('proyectos'));
  const newA = document.createElement('a');
  newA.innerHTML = pname;
  const n = document.createElement('li');
  n.appendChild(newA);
  n.id = index;
  n.style.color = 'black';
  showprojects.appendChild(n);
  showprojects.removeChild(showprojects.childNodes[0]);
}

defaultProjects();
const showtodos = document.getElementById('todos');
const todoInfo = document.createElement('div');

for (let i = 0; i < proyectos.length; i += 1) {
  // eslint-disable-next-line no-loop-func
  document.getElementById(i).onclick = () => {
    if (todoInfo.hasChildNodes()) {
      while (todoInfo.hasChildNodes()) {
        todoInfo.removeChild(todoInfo.childNodes[0]);
      }
    }
    // eslint-disable-next-line no-use-before-define
    todos(i);
  };
}


function todos(index) {
  const todos = showTodos(index);
  proyectos = JSON.parse(localStorage.getItem('proyectos'));
  const divprotitle = document.getElementById('protitle');
  divprotitle.innerHTML = proyectos[index].name;
  for (let i = 0; i < todos.length; i += 1) {
    const title = document.createElement('h5');
    title.innerHTML = todos[i].title;
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const buttonEdit = document.createElement('a');
    const button = document.createElement('button');
    p1.innerHTML = todos[i].description;
    p2.innerHTML = todos[i].duedate;
    p3.innerHTML = todos[i].priority;
    buttonEdit.innerHTML = 'Edit';
    buttonEdit.style.margin = '0 0 30px';
    button.innerHTML = 'Delete';
    button.style.margin = '0 0 30px';
    buttonEdit.className = 'waves-effect waves-light btn modal-trigger';
    button.className = 'waves-effect waves-light btn purple darken-1';
    button.onclick = () => {
      deleteTodo(index, i);
      window.location.reload();
    };
    todoInfo.appendChild(title);
    todoInfo.appendChild(p1);
    todoInfo.appendChild(p2);
    todoInfo.appendChild(p3);
    todoInfo.appendChild(buttonEdit);
    todoInfo.appendChild(button);
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
  proyectos.forEach((proyecto) => {
    const option1 = document.createElement('option');
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
  if (selectedPro === '' || title === '' || description === '' || duedate === '') {
    ok = false;
  }
  const alert = document.getElementById('alert');
  if (ok === false) {
    alert.innerHTML = 'Please enter all the information for the Todo\n';
    return ok;
  }
  addNewTodo(selectedPro, title, description, duedate, priority);
  return true;
};

function showDeleteProject() {
  const proclist1 = document.getElementById('dropdown2');
  proyectos = JSON.parse(localStorage.getItem('proyectos'));

  if (proclist1.hasChildNodes()) {
    while (proclist1.hasChildNodes()) {
      proclist1.removeChild(proclist1.childNodes[0]);
    }
  }
  proyectos.forEach((proyecto) => {
    const option1 = document.createElement('option');
    option1.innerHTML = proyecto.name;
    option1.value = proyectos.indexOf(proyecto);
    proclist1.appendChild(option1);
  });
}

showDeleteProject();

document.getElementById('delete').onclick = () => {
  deleteProject(selectedProDelete);
  window.location.reload();
};

document.getElementById('addpro').onclick = () => {
  const pname = document.getElementById('pname').value;
  let ok = true;
  if (pname === '') {
    ok = false;
  }
  const alert = document.getElementById('alert1');
  if (ok === false) {
    alert.innerHTML = 'Please enter the project name:\n';
    return ok;
  }
  const index = addNewProject(pname);
  addNewProjecttoList(pname, index);
  window.location.reload();
  projectLisLi();
  return true;
};

// editTodo(0, 1, 'editado', 'description', ' may 25 2020', 'urgent');

