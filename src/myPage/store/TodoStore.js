import { observable, computed, action } from "mobx";
import DateFunction from "../container/DateFunction";
import TodoApi from "../api/TodoApi";

class TodoStore {
  todoApi = new TodoApi();

  //observable
  @observable
  todos = [{ title: "default", isChecked: true }];

  @observable
  todo = { title: "", isChecked: false };

  @observable
  date = DateFunction();

  @observable
  dateTodo = [];

  // @observable
  // achievement = ["2020-11-14", "2020-11-15"];

  @observable
  title_achieve = "불만족";

  @observable
  color_achieve = "#a83232";

  @observable
  achievement = {};

  @observable
  achievements = [{ title: "보통", date: "2020-11-14", color: "" }];

  @observable
  errorMessage = "";

  //computed
  @computed
  get getTodo() {
    return this.todo ? { ...this.todo } : {};
  }

  @computed
  get getTodos() {
    return this.todos ? this.todos.slice() : [];
  }

  @computed
  get getDate() {
    return this.date;
  }

  //action
  @action
  setTodoProp(name, value) {
    this.todo = {
      ...this.todo,
      [name]: value,
    };
  }

  @action
  setDates(date) {
    this.date = date;
  }

  @action
  setAchievements(title_achieve) {
    this.title_achieve = title_achieve;
  }

  @action
  setColors(color_achieve) {
    this.color_achieve = color_achieve;
  }

  @action
  setAcheiveProp(name, value) {
    this.achievement = {
      ...this.achievement,
      [name]: value,
    };
  }

  @action
  async addTodo() {
    let result = this.todoApi.todoCreate(this.todo);
    this.todos = await this.todoApi.todoList();
    if (result == null) {
      this.errorMessage = "Error Occured while creating new todo";
    }
  }

  @action
  async removeTodo(todoNum) {
    this.todos = this.todos.filter((element) => element.todoNum !== this.todo);
    this.todo = {};

    let result = this.todoApi.todoDelete(todoNum);
    if (result == null) {
      this.errorMessage = `Error : There is no Todo with todoNum ${todoNum} `;
    }
  }

  @action
  async modifyTodo(todoApiModel) {
    this.todos = this.todos.map((element) =>
      element.todoNum === todoApiModel.todoNum
        ? JSON.stringify(todoApiModel)
        : element
    );
    this.todo = {};

    let result = this.todoApi.todoModify(todoApiModel);
    if (result == null) {
      this.errorMessage = `Error : cannot modify Todo No.${todoApiModel.title}`;
    }
  }

  @action
  async selectTodo(todoNum) {
    console.log("selectTodo");
    console.log(todoNum);
    // this.todo = this.todos.find((element) => element.id === id);
    this.todo = await this.todoApi.todoDetail(todoNum);
    console.log(this.todo);
    if (this.todo == null) {
      this.errorMessage = `Error : There is no Todo named ${todoNum}`;
    }
  }

  @action
  async selectAll() {
    console.log("select all");
    const todos = await this.todoApi.todoList();
    console.log(todos);
    this.todos = todos;

    if (this.todos == null) {
      return "empty list";
    }
  }
  @action
  addAchievement(achievement) {
    this.achievements.push(achievement);
  }
}

export default new TodoStore();
