class TodoApiModel {
  userId = "";
  date = "";
  todoNum = 0;
  title = "";
  isChecked = "";

  constructor(userId, date, todoNum, title, isChecked) {
    this.userId = userId;
    this.date = date;
    this.todoNum = todoNum;
    this.title = title;
    this.isChecked = isChecked;
  }
}

export default TodoApiModel;
