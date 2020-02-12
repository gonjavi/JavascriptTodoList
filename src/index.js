import './style.css';

import mainSection from './mainSection';
import { projectsLogic } from './modules/projectsLogic';
import projects from './modules/projects';

document.addEventListener('DOMContentLoaded', function() {
  var date = document.querySelector('.datepicker');
  var instances = M.Datepicker.init(date, {});
});

  const showprojects = document.getElementById('showprojects').getElementsByTagName('ul')[0];
  let proyectos = projects();

  function component() {
       for (let i=0; i< proyectos.length; i++){
          var n;
          let newA = document.createElement('a');
          newA.innerHTML = proyectos[i].name;
          n = document.createElement('li');
          n.appendChild(newA);
          n.id = [proyectos[i].name];
          n.style.color =' black';
          showprojects.appendChild(n);
      }

      const myContent = document.getElementById('content');
      myContent.appendChild(mainSection());
      //myContent.appendChild(myFooter());
    
    return { showprojects, myContent };
  }

document.body.append(component());

