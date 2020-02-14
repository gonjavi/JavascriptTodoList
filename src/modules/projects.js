let projectsModule = (function(){
  let todos = {};
  let myprojects = [
    {
      name: 'Project1',
      todos: [
        {
          title: 'next week',
          description: 'First todo project 1',
          duedate: 'Mar 19, 2020',
          priority: 'Important but not urgent'
        },
        {
          title: 'Next month',
          description: 'Second todo project 1',
          duedate: 'Apr 19, 2020',
          priority: 'Important and urgent'
        },
        {
          title: 'Next year',
          description: 'Third todo project 1',
          duedate: 'Mar 19, 2021',
          priority: 'Important'
        }
      ]
    },
    {
      name: 'Project2',
      todos: [
        {
          title: 'Todo 1 P2',
          description: 'First todo Project 2',
          duedate: 'Mar 22, 2020',
          priority: 'Important'
        }
      ]
    },
    {
      name: "Project3",
      todos: [
        {
          title: 'Todo 1 P3',
          description: 'First todo Project 3',
          duedate: 'Mar 31, 2020',
          priority: 'Important and urgent'
        }
      ]
    },
  ];
  return{
    showProjects: function() {
      return myprojects;
    },
    addNewProject: function() {
      var proLength = 0;
      
      proLength = myprojects.length;
      proLength += 1;    
    
      var newProject = { };
      newProject.name = 'Project'+proLength;
      newProject.todos = {};
      
      myprojects.push(newProject);
    },
    showTodos: function(projectparent) {
      var todos = {};
      todos = myprojects[projectparent].todos;
     
      return todos;
    },
    addNewTodo: function(project, title, description, duedate, priority) {
      var newTodo = { };
      newTodo.title = title;
      newTodo.description = description;
      newTodo.duedate = duedate;
      newTodo.priority = priority;
      
      //revisar esta empujando al proyecto y no al todo
      myprojects[project];
      myprojects[project].todos.push(newTodo);
      console.log(myprojects);
    }
  }
  
  
})();

export { projectsModule }