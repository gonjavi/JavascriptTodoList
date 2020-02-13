export default function addTodos() {
  const addpro = document.createElement('div');
  addpro.className = 'container';
  addpro.innerHTML = `
  <div class="container">
  <h2>Add Todo</h2>
  <div class="row">
      <div class="col s12">
        <form class="row">
          <div class="input-field col s8 row">
            <input type="text" id="title" class="autocomplete">
            <label for="title">title</label>                       
          </div>
          <div class="input-field col s8 row">
              <input type="text" id="description" class="autocomplete">
              <label for="description">description</label>                         
          </div>
          <div class="input-field col s8 row">
              <input type="text" id="duedate" class="datepicker">
              <label for="duedate">Due date</label>                         
          </div>
          <div class="input-field col s8 row">
            <p>
              <label>
                <input class="priority" name="group1" type="radio" value="Important and urgent" checked />
                <span>Important and urgent</span>
              </label>
            </p>
            <p>
              <label>
                <input class="priority" name="group1" type="radio" value="Important but not urgent" />
                <span>Important but not urgent</span>
              </label>
            </p> 
            <p>
              <label>
                <input class="priority" name="group1" type="radio" value="Not urgent" />
                <span>Not urgent</span>
              </label>
              </p>                       
          </div>
          <button class="col s5 btn waves-effect waves-light" id="submit" type="submit" name="action">Submit
              <i class="material-icons right"></i>
          </button>  
        </form>

        <div></div>  
        <div></div>  
      </div>
    </div>

</div>   `;
  return addpro;
}