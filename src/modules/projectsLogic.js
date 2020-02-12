let projecstLogic = (function() { 
  let myprojects = [];
  let dueDate;

  /* document.addEventListener('DOMContentLoaded', function() {
    var date = document.querySelector('.datepicker');
    dueDate = M.Datepicker.init(date, {});
  }); */

  function Project(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  return{
    addNewProjectMixin: function() {
      let title = document.getElementById('title').value;
      let description = document.getElementById('description').value;
      dueDate = document.getElementById('duedate').value;
      var priority = document.querySelector('.priority:checked').value;
      //let priority = document.getElementById('read');
      console.log(title);
      console.log(priority);

      /* var ok = true;
      var msg = 'Please enter all the information requested:\n';
      if(title === "" || author === "" && pages === "" || price === "")
      {
        ok = false;
      }
      if(ok == false){
        alert(msg);
      return ok;
      }

      if (isNaN(pages)) {
        msg = 'Number of pages must be a number';
        alert(msg);
      }

      if (isNaN(price)) {
        msg = 'Price must be a number';
        alert(msg);
      }
      
      if(checkbox.checked == true){
        read = 'Yes';
      }else{
        read = 'No';
      } */

      myprojects.push(new Project(title, description, dueDate, priority));
    }

  } 
})();

export { projecstLogic };