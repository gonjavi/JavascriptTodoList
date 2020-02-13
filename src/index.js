import './style.css';
import { projectsModule } from './modules/projects';


document.addEventListener('DOMContentLoaded', function() {
  var date = document.querySelector('.datepicker');
  var instances = M.Datepicker.init(date, {});
});

document.getElementById('addpro').onclick = () => {
  projectsModule.addNewProject(); 
  addNewProjecttoList();
};
  const showprojects = document.getElementById('showprojects').getElementsByTagName('ul')[0];
  let proyectos = projectsModule.showProjects();
  
  function defaultProjects() {
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


for (let i=0; i< proyectos.length; i++){
  let index = 'Project'+i;
  document.getElementById(i).onclick = () => {
     if (todoInfo.hasChildNodes()){
      let count = todoInfo.childElementCount;
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
    p1.innerHTML = todos[i].description;
    p2.innerHTML = todos[i].duedate;
    todoInfo.appendChild(title);
    todoInfo.appendChild(p1);
    todoInfo.appendChild(p2);
    
    showtodos.appendChild(todoInfo);

  }
}