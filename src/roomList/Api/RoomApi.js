import axios from "axios";

class RoomApi {
  URL = "/rooms";

  roomList() {
    console.log("roomLIst");
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
