function LS() {
  LS.prototype.getFromLS = function () {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
      tasks = JSON.parse(tasks);
    } else {
      tasks = [];
    }
    return tasks;
  };

  LS.prototype.addToLS = function (task) {
    let tasks = this.getFromLS();
    tasks.unshift(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  LS.prototype.deleteTask = function (id) {
    let tasks = this.getFromLS();
    let index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  LS.prototype.completeTask = function (id) {
    let tasks = this.getFromLS();
    let index = tasks.findIndex((task) => task.id === id);
    if (tasks[index].isCompleted) {
      tasks[index].isCompleted = false;
    } else {
      tasks[index].isCompleted = true;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  LS.prototype.findTask = function (id) {
    let tasks = this.getFromLS();
    return tasks.find((task) => task.id === id);
  };

  LS.prototype.updateTask = function (taskId, taskTitle) {
    let tasks = this.getFromLS();
    let index = tasks.findIndex((task) => task.id === taskId);
    tasks[index].title = taskTitle;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
}

export default LS;
