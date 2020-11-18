import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import AchievementView from "../view/AchievementView";

@inject("TodoStore")
@observer
class AchievementContainer extends Component {
  onSetAchieveProp = (name, value) => {
    console.log(name, value);
    this.props.TodoStore.setAcheiveProp(name, value);
  };

  onClickSatisfy = () => {
    this.props.setPopUp(false);
    this.props.TodoStore.setAchievements("만족");
    this.props.TodoStore.setColors("#32a852");
    let date = this.props.TodoStore.date;
    this.onSetAchieveProp("date", date);
    let title_achieve = this.props.TodoStore.title_achieve;
    this.onSetAchieveProp("title", title_achieve);
    let color_achieve = this.props.TodoStore.color_achieve;
    this.onSetAchieveProp("color", color_achieve);
    let achievement = this.props.TodoStore.achievement;
    this.props.TodoStore.addAchievement(achievement);
  };
  onClickUsually = () => {
    this.props.setPopUp(false);
    this.props.TodoStore.setAchievements("보통");
    this.props.TodoStore.setColors("#fcba03");
    let date = this.props.TodoStore.date;
    this.onSetAchieveProp("date", date);
    let title_achieve = this.props.TodoStore.title_achieve;
    this.onSetAchieveProp("title", title_achieve);
    let color_achieve = this.props.TodoStore.color_achieve;
    this.onSetAchieveProp("color", color_achieve);
    let achievement = this.props.TodoStore.achievement;
    this.props.TodoStore.addAchievement(achievement);
  };
  onClickDissatisfy = () => {
    this.props.setPopUp(false);
    this.props.TodoStore.setAchievements("불만족");
    this.props.TodoStore.setColors("#a83232");
    let date = this.props.TodoStore.date;
    this.onSetAchieveProp("date", date);
    let title_achieve = this.props.TodoStore.title_achieve;
    this.onSetAchieveProp("title", title_achieve);
    let color_achieve = this.props.TodoStore.color_achieve;
    this.onSetAchieveProp("color", color_achieve);
    let achievement = this.props.TodoStore.achievement;
    this.props.TodoStore.addAchievement(achievement);
  };

  render() {
    const { setPopUp, mySocket } = this.props;
    let achievements = this.props.TodoStore.achievements;
    console.log(achievements);
    return (
      <div>
        <AchievementView
          setPopUp={setPopUp}
          mySocket={mySocket}
          onClickSatisfy={this.onClickSatisfy}
          onClickUsually={this.onClickUsually}
          onClickDissatisfy={this.onClickDissatisfy}
        />
      </div>
    );
  }
}

export default AchievementContainer;
