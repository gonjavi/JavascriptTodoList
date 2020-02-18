// eslint-disable-next-line no-unused-vars
import { stringify } from 'querystring';

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
    {
      name: 'Project2',
      todos: [
        {
          title: 'Todo 1 P2',
          description: 'First todo Project 2',
          duedate: 'Mar 22, 2020',
          priority: 'Important',
        },
      ],
    },
    {
      name: 'Project3',
      todos: [
        {
          title: 'Todo 1 P3',
          description: 'First todo Project 3',
          duedate: 'Mar 31, 2020',
          priority: 'Important and urgent',
        },
      ],
    },
  ];
  return myprojects;
};
const addNewProject = (pname) => {
  const newProject = { };
  // const todos = {};
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


export {
  showProjects,
  addNewProject,
  showTodos,
  addNewTodo,
  deleteProject,
};