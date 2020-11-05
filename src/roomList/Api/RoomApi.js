import axios from "axios";

class RoomApi {
  URL = "/rooms";

  roomList() {
    return axios
      .get(this.URL)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => console.error(error));
  }
}

export default RoomApi;
