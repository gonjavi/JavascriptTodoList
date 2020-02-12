import { projectsModule } from './modules/projects';
import component from './index';

export default function mainSection() {
  const mainSection = document.createElement('div');
  mainSection.className = 'container';
 
  /* document.getElementById('addpro').onclick = () => {
    mainSection.appendChild(addProject());
    mainSection.removeChild(mainSection.childNodes[0]);
      
  }; */

 
  
  
  return  mainSection;
}
