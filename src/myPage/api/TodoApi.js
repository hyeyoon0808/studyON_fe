import axios from "axios";

class TodoApi {
  // URL = "/api/todos/";
  URL = "/todo";

  todoCreate(TodoApiModel) {
    console.log(TodoApiModel);
    return axios
      .post(this.URL, TodoApiModel)
      .then((response) => (response && response.data) || null);
  }

  todoDetail(todoNum) {
    return axios
      .get(this.URL + `${todoNum}/`)
      .then((response) => (response && response.data) || null);
  }

  todoList(userId, todoDate) {
    return axios
      .get(this.URL + `?userId=${userId}&todoDate=${todoDate}`)
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
