const todoList = {
  tasks: [],

  addTask(task) {
    this.tasks.push(task);
    console.log(`✅ Vazifa qo‘shildi: "${task}"`);
  },

  removeTask(index) {
    if (index >= 0 && index < this.tasks.length) {
      const removed = this.tasks.splice(index, 1);
      console.log(`❌ Vazifa o‘chirildi: "${removed[0]}"`);
    } else {
      console.log("Xato: Bunday indeksda vazifa mavjud emas!");
    }
  },

  displayTasks() {
    if (this.tasks.length === 0) {
      console.log("📭 Vazifalar ro‘yxati bo‘sh.");
    } else {
      console.log("📌 Vazifalar ro‘yxati:");
      this.tasks.forEach((task, i) => {
        console.log(`${i}. ${task}`);
      });
    }
  }
};

todoList.addTask('Breakfast at 8:00 AM');
todoList.addTask('Meeting at 12:00 PM');
todoList.displayTasks();
todoList.removeTask(0);
todoList.displayTasks();
