import { observable, computed, action } from "mobx";
import { getCurrentUser } from "../oauth/util/APIUtils";
import { ACCESS_TOKEN } from "../oauth/constants";
import Alert from "react-s-alert";
import PointApi from "../myPage/api/PointApi";
import PointApiModel from "../myPage/api/model/PointApiModel";

class UserStore {
  pointApi = new PointApi();

  @observable
  authenticated = false;

  @observable
  currentUser = {};

  @observable
  loading = false;

  // @observable
  // curPoint = 2000;

  @observable
  point = {
    userId: 1,
    state: "initial",
    owner: false,
  }; //서버에 보낼 포인트 정보(회원가입시)

  @observable
  userPoint = {}; //포인트 조회시 사용 데이터
  // "id": 1,
  // "userId": 2,
  // "point": 900,
  // "todayTomatoCount": 0,
  // "userGrade": "NORMAL"

  @computed
  get getAuthenticated() {
    return this.authenticated;
  }

  @computed
  get getCurrentUser() {
    return this.currentUser ? { ...this.currentUser } : {};
  }

  @computed
  get getLoading() {
    return this.loading;
  }

  @action
  loadCurrentlyLoggedInUser = () => {
    this.loading = true;

    getCurrentUser()
      .then((response) => {
        this.currentUser = response;
        this.authenticated = true;
        this.loading = false;
      })
      .catch((error) => {
        this.loading = false;
      });
  };

  @action
  handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    this.authenticated = false;
    this.currentUser = null;

    Alert.success("You're safely logged out!");
  };

  @action
  setCurPoint = (curPoint) => {
    this.curPoint = curPoint;
  };

  @action
  setUserPointProp(name, value) {
    this.point = {
      ...this.point,
      [name]: value,
    };
  }
  @action
  async addUserPoint(point) {
    point.userId = this.currentUser.id;
    point.state = "initial";
    point.owner = false;
    const pointApiModel = new PointApiModel(
      point.userId,
      point.state,
      point.owner
    );
    console.log("pointApiModel ", pointApiModel);
    const result = this.pointApi.pointCreate(pointApiModel);
    if (result == null) {
      this.errorMessage = "Error point create";
    } else {
      console.log("success");
    }
  }

  @action
  async checkPoint(userId) {
    this.userPoint = await this.pointApi.pointCheck(userId);
  }

  @action
  async modifyPoint(point) {
    point.userId = this.currentUser.id;
    const pointApiModel = new PointApiModel(
      point.userId,
      point.state,
      point.owner
    );
    this.pointApi.pointModify(pointApiModel);
    console.log("현재 포인트: ", this.userPoint.point);
  }
}

export default new UserStore();
