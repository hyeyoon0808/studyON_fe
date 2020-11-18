class TodoApiModel {
  userId = 0;
  desc = "";
  todoDate = "";
  isComplete = false;

  constructor(userId, desc, todoDate, isComplete) {
    this.userId = userId;
    this.desc = desc;
    this.todoDate = todoDate;
    this.isComplete = isComplete;
  }
}

export default TodoApiModel;
