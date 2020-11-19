import axios from "axios";

class AchievementApi {
  URL = "/todo-oneday";

  todoDetail(id) {
    return axios
      .get(this.URL + `/${id}`)
      .then((response) => (response && response.data) || null);
  }

  todoList(userId, todoDate) {
    return axios
      .get(this.URL + `?userId=${userId}&todoDate=${todoDate}`)
      .then((response) => (response && response.data) || null);
  }

  achievementSave(id, achievment) {
    return axios
      .put(this.URL + `/${id}?achieve=${achievment}`)
      .then((response) => (response && response.data) || null);
  }
}

export default AchievementApi;
