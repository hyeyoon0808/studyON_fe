import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import NewCalendar from "../view/NewCalendar";

@inject("TodoStore")
@observer
class CalendarContainer extends Component {
  handleDateClick = (arg) => {
    //console.log(arg.dateStr);
    const tdate = arg.dateStr;
    this.props.TodoStore.setDates(tdate);
    let date = this.props.TodoStore.date;
    console.log(date);
    this.onSetAchieveProp("date", date);
  };

  onSetAchieveProp = (name, value) => {
    console.log(name, value);
    this.props.TodoStore.setAcheiveProp(name, value);
  };

  handleClick = () => {
    this.props.TodoStore.setAchievements("만족");
    this.props.TodoStore.setColors("#32a852");
    let title_achieve = this.props.TodoStore.title_achieve;
    this.onSetAchieveProp("title", title_achieve);
    let color_achieve = this.props.TodoStore.color_achieve;
    this.onSetAchieveProp("color", color_achieve);
    let achievement = this.props.TodoStore.achievement;
    this.props.TodoStore.addAchievement(achievement);
  };
  handleClick2 = () => {
    this.props.TodoStore.setAchievements("보통");
    this.props.TodoStore.setColors("#fcba03");
    let title_achieve = this.props.TodoStore.title_achieve;
    this.onSetAchieveProp("title", title_achieve);
    let color_achieve = this.props.TodoStore.color_achieve;
    this.onSetAchieveProp("color", color_achieve);
    let achievement = this.props.TodoStore.achievement;
    this.props.TodoStore.addAchievement(achievement);
  };
  handleClick3 = () => {
    this.props.TodoStore.setAchievements("불만족");
    this.props.TodoStore.setColors("#a83232");
    let title_achieve = this.props.TodoStore.title_achieve;
    this.onSetAchieveProp("title", title_achieve);
    let color_achieve = this.props.TodoStore.color_achieve;
    this.onSetAchieveProp("color", color_achieve);
    let achievement = this.props.TodoStore.achievement;
    this.props.TodoStore.addAchievement(achievement);
  };

  render() {
    //const { color } = this.state;
    let achievements = this.props.TodoStore.achievements;
    console.log(achievements);
    let achievement_event = achievements.map((achievement) => {
      //return { title: "만족", date: value };
      return achievement;
    });
    return (
      <>
        <button onClick={this.handleClick}>만족</button>
        <button onClick={this.handleClick2}>보통</button>
        <button onClick={this.handleClick3}>불만족</button>
        <NewCalendar
          handleDateClick={this.handleDateClick}
          achievement={achievement_event}
        />
      </>
    );
  }
}

export default CalendarContainer;
