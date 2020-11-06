import axios from "axios";

class RoomCreateApi {
  URL = "/rooms";

  roomCreate(RoomApiModel) {
    console.log(RoomApiModel.getJson());
    return axios
      .post(this.URL, RoomApiModel.getJson())
      .then((response) => (response && response.data) || null);
  }
}

export default RoomCreateApi;
