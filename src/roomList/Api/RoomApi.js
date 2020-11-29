import axios from "axios";

class RoomApi {
  URL = "/rooms";

  roomList() {
    return axios
      .get(this.URL)
      .then((response) => (response && response.data) || null);
  }

  updateIsPlaying(RoomApiModel) {
    return axios
      .put(this.URL, RoomApiModel.getJson())
      .then((response) => (response && response.data) || null);
  }

  userList(RoomApiModel) {
    return axios
      .put(this.URL, RoomApiModel.getJson())
      .then((response) => (response && response.data) || null);
  }

  roomDelete(id) {
    return axios
      .delete(this.URL + `/${id}`)
      .then((response) => (response && response.data) || null);
  }

  roomRecreate(RoomApiModel) {
    return axios
      .put(this.URL, RoomApiModel.getJson())
      .then((response) => (response && response.data) || null);
  }
}

export default RoomApi;
