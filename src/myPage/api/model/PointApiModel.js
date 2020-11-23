class PointApiModel {
  userId = 0;
  state = "initial";
  owner = false;

  constructor(userId, state, owner) {
    this.userId = userId;
    this.state = state;
    this.owner = owner;
  }
}

export default PointApiModel;
