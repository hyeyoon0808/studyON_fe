import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import MyPages from "../view/MyPages"

@inject("Store")
@observer
class MyPageContainer extends Component {
    componentDidMount() {
        const { Store } = this.props;
        Store.userDetail();
    }

    render() {
        const user = this.props.Store.getUser;
        return <MyPages user={user} />
    }
}

export default MyPageContainer;