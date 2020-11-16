import { observable, computed, action } from "mobx";
import DateFunction from "../container/DateFunction";
import TodoApi from "../api/TodoApi";

class TodoStore {
  todoApi = new TodoApi();

  //observable
  @observable
  todos = [];

  @observable
  todo = {};

  @observable
  date = DateFunction();

  @observable
  dateTodo = [];

  @observable
  achievement = ["2020-11-14", "2020-11-15"];

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

  //   @action
  //   addTodo(todo) {
  //     this.todos.push(todo);
  //     this.todo = {};
  //   }

  @action
  async addTodo() {
    let result = this.todoApi.todoCreate(this.todo);
    this.todos = await this.todoApi.todoList();
    if (result == null) {
      this.errorMessage = "Error Occured while creating new todo";
    }
  }

  //   @action
  //   removeTodo(id) {
  //     this.todos = this.todos.filter((element) => element.id !== id);
  //     this.todo = {};
  //   }
  @action
  async removeTodo(todoNum) {
    this.todos = this.todos.filter((element) => element.todoNum !== this.todo);
    this.todo = {};

    let result = this.todoApi.todoDelete(todoNum);
    if (result == null) {
      this.errorMessage = `Error : There is no Todo with todoNum ${todoNum} `;
    }
  }

  //   @action
  //   modifyTodo(todo) {
  //     this.todos = this.todos.map((element) =>
  //       element.id === todo.id ? todo : element
  //     );
  //     this.todo = {};
  //   }

  @action
  async modifyTodo(todoApiModel) {
    //todos에서 local todo.todoNum와 같은 객체 수정
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

  //   @action
  //   selectTodo(id) {
  //     this.todo = this.todos.find((element) => element.id === id);
  //   }
  @action
  async selectTodo(todoNum) {
    console.log("selectTodo");
    console.log(todoNum);
    //todos에서 id가 같은 todo객체 변경
    // this.todo = this.todos.find((element) => element.id === id);
    this.todo = await this.todoApi.todoDetail(todoNum);
    console.log(this.todo);
    if (this.todo == null) {
      this.errorMessage = `Error : There is no Todo named ${todoNum}`;
    }
  }

  @action
  addAchievement(date) {
    this.achievement.push(date);
  }
}

export default new TodoStore();
