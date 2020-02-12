import './style.css';
import mainSection from './mainSection';
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
  //projectsModule.addNewProject(); 


  function component() {
       for (let i=0; i< proyectos.length; i++){
          
          let newA = document.createElement('a');
          newA.innerHTML = proyectos[i].name;
          let n = document.createElement('li');
          n.appendChild(newA);
          n.id = [proyectos[i].name];
          n.style.color =' black';
          showprojects.appendChild(n);
      }
      
     // const myContent = document.getElementById('content');
      //myContent.appendChild(mainSection());
      //myContent.appendChild(myFooter());

    
    //return showprojects;
  }
  function addNewProjecttoList() {
    var proyectos = projectsModule.showProjects();
    var l = 0;
    l = proyectos.length -1;
    l++;
    var newA = document.createElement('a');
    newA.innerHTML = 'Projects'+[l];
    let n = document.createElement('li');
    n.appendChild(newA);
    n.id = 'Projects'+[l];
    n.style.color =' black';
    showprojects.appendChild(n);
    showprojects.removeChild(showprojects.childNodes[0]);
  }

//document.body.append(component());

component();