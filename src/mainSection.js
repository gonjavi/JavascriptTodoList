
import addProject from './modules/addProject';
import projects from './modules/projects';
import { projectsLogic } from './modules/projectsLogic';

export default function mainSection() {
  const mainSection = document.createElement('div');
  mainSection.className = 'container';
 
  document.getElementById('addpro').onclick = () => {
    mainSection.appendChild(addProject());
    mainSection.removeChild(mainSection.childNodes[0]);
      
  }

  return  mainSection;
}
