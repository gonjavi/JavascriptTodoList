let projectsModule = (function(){
  
  let myprojects = [
    {
      name: 'Project1',
      todos: [
        {
          title: 'next week',
          description: 'First todo project 1',
          duedate: '02/03/2020'
        },
        {
          title: 'Next month',
          description: 'Second todo project 1',
          duedate: '02/03/2020'
        },
        {
          title: 'Next year',
          description: 'Third todo project 1',
          duedate: '02/03/2020'
        }
      ]
    },
    {
      name: 'Project2',
      todos: [
        {
          title: 'Todo 1 P2',
          description: 'First todo Project 2',
          duedate: '02/03/2020'
        }
      ]
    },
    {
      name: "Project3",
      todos: [
        {
          title: 'Todo 1 P3',
          description: 'First todo Project 3',
          duedate: '02/03/2020'
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
      let todos = {};
      todos = myprojects[projectparent].todos;
     
      //console.log(todos);
      return todos;
    },
    addNewTodo: function() {
      
    }
  }
  
  
})();

export { projectsModule }