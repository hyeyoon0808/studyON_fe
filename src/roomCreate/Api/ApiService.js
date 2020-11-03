import axios from "axios";

const ROOMS_API_URL = "http://localhost:8000/rooms";

class ApiService {
  fetchRooms() {
    return axios.get(ROOMS_API_URL);
  }

  fetchRoomsByID(roomID) {
    return axios.get(ROOMS_API_URL + "/" + roomID);
  }

  deleteRoom(roomID) {
    return axios.delete(ROOMS_API_URL + "/" + roomID);
  }

  addRoom(room) {
    return axios.post(ROOMS_API_URL, room);
  }

  editRoom(room) {
    return axios.put(ROOMS_API_URL + "/" + room.id, room);
  }
}

export default new ApiService();
