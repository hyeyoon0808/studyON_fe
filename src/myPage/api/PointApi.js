import axios from "axios";

class PointApi {
  URL = "/point-grade";

  //유저 포인트 정보 생성
  pointCreate(PointApiModel) {
    console.log(PointApiModel);
    return axios
      .post(this.URL, PointApiModel)
      .then((response) => (response && response.data) || null);
  }

  //포인트 조회
  pointCheck(userId) {
    return axios
      .get(this.URL + `?userId=${userId}`)
      .then((response) => (response && response.data) || null);
  }

  //포인트 정보 수정
  pointModify(PointApiModel) {
    return axios
      .put(this.URL, PointApiModel)
      .then((response) => (response && response.data) || null);
  }
}
export default PointApi;
