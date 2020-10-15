import React, { Component } from "react";

class RoomCreate extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <>
        <div>RoomCreate Page</div>
        <button onClick={this.goBack}>취소</button>
        <button>방 만들기</button>
      </>
    );
  }
}

export default RoomCreate;
