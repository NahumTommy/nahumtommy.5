var input1 = document.getElementById('inp1');
var output = document.getElementById('out');
var addBtn = document.getElementById('add');
var input2 = document.getElementById('inp2');

// Task constructor
var Task = function(title, description) {
  this.title = title;
  this.description = description;
  this.completed = false;
  this.MarkAsCompleted = function() {
    this.completed = true;
  };
};

// Task list constructor
var taskList = function() {
  this.tasks = [];
  this.addTask = function(title, description) {
    const newTask = new Task(title, description);
    this.tasks.push(newTask);
  };
  this.removeTask = function(title) {
    this.tasks = this.tasks.filter(task => task.title !== title);  
  };
  this.renderTasks = function() {
    output.innerHTML = ''; // Clear the current list before re-rendering
    this.tasks.forEach(task => {
      var li = document.createElement('h1');
      var p = document.createElement('p')
      var hr = document.createElement('hr')
      var btn = document.createElement('button');
      btn.textContent = 'delete';
      p.textContent = `${task.description}`
      li.textContent = `${task.title }`;
      li.appendChild(hr)
      li.appendChild(p)
      li.appendChild(btn);
      output.appendChild(li);

      // Button delete
      btn.addEventListener('click', () => {
        this.removeTask(task.title);
        this.renderTasks();   
      });
    });
  };
};

const list = new taskList();


addBtn.addEventListener('click', () => {
  var head = input1.value.trim();
  var body = input2.value.trim();

  if (head && body) {  
    list.addTask(head, body);
    input1.value = '';
    input2.value = '';
    list.renderTasks();
  }
});