import './style.css';

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
let date2;
let chooseproject;
let valueModal;
let project;
let todo;
let proyectos = showProjects();
localStorage.setItem('proyectos', JSON.stringify(proyectos));
proyectos = JSON.parse(localStorage.getItem('proyectos'));

document.addEventListener('DOMContentLoaded', () => {
  valueModal = document.querySelectorAll('.modal');
  M.Modal.init(valueModal, {});
});

document.addEventListener('DOMContentLoaded', () => {
  date = document.getElementById('duedate');
  M.Datepicker.init(date, {});
});

document.addEventListener('DOMContentLoaded', () => {
  date2 = document.getElementById('duedate2');
  M.Datepicker.init(date2, {});
});

document.addEventListener('DOMContentLoaded', () => {
  chooseproject = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(chooseproject, {});
});

document.addEventListener('DOMContentLoaded', () => {
  chooseproject = document.querySelectorAll('select');
  M.FormSelect.init(chooseproject, {});
});
let selectedPro = 0;
document.getElementById('dropdown1').addEventListener('change', () => {
  selectedPro = document.getElementById('dropdown1').value;
});

let selectedProDelete;
document.getElementById('dropdown2').addEventListener('change', () => {
  selectedProDelete = document.getElementById('dropdown2').value;
});

const showprojects = document.getElementById('showprojects').getElementsByTagName('ul')[0];

function defaultProjects() {
  proyectos = JSON.parse(localStorage.getItem('proyectos'));
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
const proTodo = (index, todoindex) => {
  project = index;
  todo = todoindex;
};

function todos(index) {
  const todos = showTodos(index);
  proyectos = JSON.parse(localStorage.getItem('proyectos'));
  const divprotitle = document.getElementById('protitle');
  divprotitle.innerHTML = proyectos[index].name;
  for (let i = 0; i < todos.length; i += 1) {
    const title = document.createElement('h5');
    title.innerHTML = todos[i].title;
    title.className = 'purple-text';
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
    buttonEdit.href = '#modal1';
    button.className = 'waves-effect waves-light btn purple darken-1';
    button.onclick = () => {
      deleteTodo(index, i);
      window.location.reload();
    };
    buttonEdit.onclick = () => {
      proTodo(index, i);
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

document.getElementById('updateTodo').onclick = () => {
  const title2 = document.getElementById('title2').value;
  const description2 = document.getElementById('description2').value;
  const duedate2 = document.getElementById('duedate2').value;
  const priority2 = document.querySelector('.priority2:checked').value;
  let ok = true;
  if (title2 === '' || description2 === '' || duedate2 === '') {
    ok = false;
  }
  const alert2 = document.getElementById('alert2');
  if (ok === false) {
    alert2.innerHTML = 'Please enter all the information to update the Todo\n';
    alert2.className = 'red-text';
    return ok;
  }
  editTodo(project, todo, title2, description2, duedate2, priority2);
  alert2.innerHTML = 'Todo saved successfully\n';
  alert2.className = 'green-text';
  window.location.reload();
  return true;
};

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

document.getElementById('submit').onclick = () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const duedate = document.getElementById('duedate').value;
  const priority = document.querySelector('.priority:checked').value;
  let ok = true;
  if (selectedPro === '' || title === '' || description === '' || duedate === '') {
    ok = false;
  }
  const alert = document.getElementById('alert');
  if (ok === false) {
    alert.innerHTML = 'Please enter all the information for the Todo\n';
    alert.className = 'red-text';
    return ok;
  }
  addNewTodo(selectedPro, title, description, duedate, priority);
  alert.innerHTML = 'Todo saved successfully\n';
  alert.className = 'green-text';
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