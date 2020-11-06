import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import TagView from "../view/TagView";

@inject("RoomStore")
@observer
class TagContainer extends Component {
  checkedTagList = (event, id) => {
    this.props.RoomStore.checkedTagList(event.target.checked, id);
  };
  render() {
    const tagList = this.props.RoomStore.getTagList;
    return <TagView tagList={tagList} checkedTagList={this.checkedTagList} />;
  }
}

export default TagContainer;
