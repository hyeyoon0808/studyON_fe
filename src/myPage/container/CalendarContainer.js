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
    // this.setState({ date: tdate });
    // this.props.TodoStore.setDates(this.state.date);
    // console.log(this.state.date);
  };

  handleClick = () => {
    let date = this.props.TodoStore.date;
    this.props.TodoStore.addAchievement(date);
  };

  render() {
    let achievement = this.props.TodoStore.achievement;
    console.log(achievement);
    let achievement_event = achievement.map((value) => {
      return { title: "만족", date: value };
    });
    console.log(achievement_event);
    return (
      <>
        <button onClick={this.handleClick}>만족</button>
        <NewCalendar
          handleDateClick={this.handleDateClick}
          achievement={achievement_event}
        />
      </>
    );
  }
}

export default CalendarContainer;
