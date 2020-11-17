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
  };

  handleClick = () => {
    this.props.TodoStore.setAchievements("만족");
    let date = this.props.TodoStore.date;
    this.props.TodoStore.addAchievement(date);
  };
  handleClick2 = () => {
    this.props.TodoStore.setAchievements("보통");
    let date = this.props.TodoStore.date;
    this.props.TodoStore.addAchievement(date);
  };
  handleClick3 = () => {};

  render() {
    let achievement = this.props.TodoStore.achievement;
    console.log(achievement);
    let achievement_event = achievement.map((value) => {
      //return { title: "만족", date: value };
      let title_achieve = this.props.TodoStore.title_achieve;
      return { title: title_achieve, date: value };
    });

    console.log(achievement_event);
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
