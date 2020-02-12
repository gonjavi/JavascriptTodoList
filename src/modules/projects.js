let projectsModule = (function(){
  
  let myprojects = [
    {
      name: 'Project1',
      todos: [
        {
          title: 'todo 1',
          description: 'First todo',
          duedate: '02/03/2020'
        },
        {
          title: 'todo 2',
          description: 'Second todo ',
          duedate: '02/03/2020'
        },
        {
          title: 'todo 3',
          description: 'Third todo',
          duedate: '02/03/2020'
        }
      ]
    },
    {
      name: 'Project2',
      todos: [
        {
          title: 'todo 1',
          description: 'First todo P2',
          duedate: '02/03/2020'
        }
      ]
    },
    {
      name: "Project3",
      todos: [
        {
          title: 'todo 1',
          description: 'First todo P2',
          duedate: '02/03/2020'
        }
      ]
    },
  ];
  return{
    showProjects: function(){
      return myprojects;
    },
    addNewProject: function(){
      var proLength = 0;
      
      proLength = myprojects.length;
      proLength += 1;    
    
      var newProject = { };
      newProject.name = 'Project'+proLength;
      newProject.todos = [];
      
      myprojects.push(newProject);
    }
  }
  
  
})();

export { projectsModule }