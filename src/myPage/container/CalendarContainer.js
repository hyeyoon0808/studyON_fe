import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import NewCalendar from "../view/NewCalendar";

@inject("TodoStore")
@observer
class CalendarContainer extends Component {
  handleDateClick = (arg) => {
    const tdate = arg.dateStr;
    this.props.TodoStore.setDates(tdate);
    let date = this.props.TodoStore.date;
    console.log(date);
    // this.onSetAchieveProp("date", date);
  };

  render() {
    let achievements = this.props.TodoStore.achievements;
    console.log(achievements);
    let achievement_event = achievements.map((achievement) => {
      //return { title: "만족", date: value };
      return achievement;
    });
    return (
      <>
        <NewCalendar
          handleDateClick={this.handleDateClick}
          achievement={achievement_event}
        />
      </>
    );
  }
}

export default CalendarContainer;
