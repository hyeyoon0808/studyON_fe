import axios from "axios";

class TodoApi {
  URL = "/api/todos/";

  todoCreate(todo) {
    let todoJson = todo;
    console.log(todoJson);
    return axios
      .post(this.URL, todoJson)
      .then((response) => (response && response.data) || null);
  }

  todoDetail(todoNum) {
    return axios
      .get(this.URL + `${todoNum}/`)
      .then((response) => (response && response.data) || null);
  }

  todoList() {
    return axios
      .get(this.URL)
      .then((response) => (response && response.data) || null);
  }

  todoModify(todoApiModel) {
    let todoJson = JSON.stringify(todoApiModel);

    return axios
      .put(this.URL, todoJson)
      .then((response) => (response && response.data) || null);
  }

  todoDelete(todoNum) {
    return axios
      .delete(this.URL + `${todoNum}/`)
      .then((response) => (response && response.data) || null);
  }
}

export default TodoApi;
