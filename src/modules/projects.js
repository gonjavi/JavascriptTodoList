
const showProjects = () => {
  const myprojects = JSON.parse(localStorage.getItem('proyectos')) || [
    {
      name: 'Project1',
      todos: [
        {
          title: 'next week',
          description: 'First todo project 1',
          duedate: 'Mar 19, 2020',
          priority: 'Important but not urgent',
        },
        {
          title: 'Next month',
          description: 'Second todo project 1',
          duedate: 'Apr 19, 2020',
          priority: 'Important and urgent',
        },
        {
          title: 'Next year',
          description: 'Third todo project 1',
          duedate: 'Mar 19, 2021',
          priority: 'Important',
        },
      ],
    },
  ];
  return myprojects;
};
const addNewProject = (pname) => {
  const newProject = { };
  let myprojects = JSON.parse(localStorage.getItem('proyectos'));
  newProject.name = pname;
  newProject.todos = [];
  myprojects.push(newProject);
  localStorage.setItem('proyectos', JSON.stringify(myprojects));
  myprojects = JSON.parse(localStorage.getItem('proyectos'));
  const index = myprojects.indexOf(pname);
  return index;
};
const showTodos = (projectparent) => {
  let todos = {};
  const myprojects = JSON.parse(localStorage.getItem('proyectos'));
  todos = myprojects[projectparent].todos;
  return todos;
};
const addNewTodo = (project, title, description, duedate, priority) => {
  const newTodo = { };
  let myprojects = JSON.parse(localStorage.getItem('proyectos'));
  myprojects = JSON.parse(localStorage.getItem('proyectos'));
  newTodo.title = title;
  newTodo.description = description;
  newTodo.duedate = duedate;
  newTodo.priority = priority;
  myprojects[project].todos.push(newTodo);
  localStorage.setItem('proyectos', JSON.stringify(myprojects));
};
const deleteProject = (project) => {
  const myprojects = JSON.parse(localStorage.getItem('proyectos'));
  myprojects.splice(project, 1);
  localStorage.setItem('proyectos', JSON.stringify(myprojects));
};
const deleteTodo = (project, todoindex) => {
  const myprojects = JSON.parse(localStorage.getItem('proyectos'));
  myprojects[project].todos.splice(todoindex, 1);
  localStorage.setItem('proyectos', JSON.stringify(myprojects));
};

const editTodo = (project, todoindex, title, description, duedate, priority) => {
  const newTodo = { };
  let myprojects = JSON.parse(localStorage.getItem('proyectos'));
  myprojects = JSON.parse(localStorage.getItem('proyectos'));
  newTodo.title = title;
  newTodo.description = description;
  newTodo.duedate = duedate;
  newTodo.priority = priority;
  myprojects[project].todos.splice(todoindex, 1,newTodo);
  localStorage.setItem('proyectos', JSON.stringify(myprojects));
};


export {
  showProjects,
  addNewProject,
  showTodos,
  addNewTodo,
  deleteProject,
  deleteTodo,
  editTodo,
};