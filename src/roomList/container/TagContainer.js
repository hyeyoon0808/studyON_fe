import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import TagView from "../view/TagView";

@inject("Store")
@observer
class TagContainer extends Component {
    checkedTagList = (event, id) => {
        this.props.Store.checkedTagList(event.target.checked, id);
    };
    render() {
        const tagList = this.props.Store.getTagList;
        return (
            <TagView tagList={tagList} checkedTagList={this.checkedTagList} />
        );
    }
}

export default TagContainer;
