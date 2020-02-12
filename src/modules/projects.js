export default function projects() {
  let myprojects = [
    {
      name: 'Project 1',
      todos: [
        {
          title: 'todo 1',
          description: "First todo ",
          duedate: '02/03/2020'
        },
        {
          title: 'todo 2',
          description: 'Second todo ',
          duedate: '02/03/2020'
        },
        {
          title: 'todo 3',
          description: "Third todo ",
          duedate: '02/03/2020'
        }
      ]
    },
    {
      name: 'Project 2',
      todos: [
        {
          title: 'todo 1',
          description: 'First todo P2',
          duedate: '02/03/2020'
        }
      ]
    },
    {
      name: "Project 3",
      todos: [
        {
          title: 'todo 1',
          description: 'First todo P2',
          duedate: '02/03/2020'
        }
      ]
    },
  ];

  /* const project = document.createElement('div');
  project.className = 'container';
  
  project.innerHTML = `
    <div class="container">
      <h2>Proyects</h2>
      <div class="row">
        <div class="col l1"></div>
        <ul class="col l11">
          <li><a href="#" id=''><h5>project 1</h5></a></li>
          <li><a href="#" id=''><h5>project 1</h5></a></li>
          <li><a href="#" id=''><h5>project 1</h5></a></li>
          <li><a href="#" id=''><h5>project 1</h5></a></li>
          <li><a href="#" id=''><h5>project 1</h5></a></li>
        </ul>
      </div>
    </div>   `;
 */
return myprojects;
}