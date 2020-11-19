import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import NewCalendar from "../view/NewCalendar";

@inject("TodoStore", "UserStore")
@observer
class CalendarContainer extends Component {
  async componentDidMount() {
    console.log("calendarContainer: ");
    let currentUser = this.props.UserStore.currentUser;
    let date = this.props.TodoStore.date;
    let dateMonth = date.split("-");
    dateMonth = dateMonth[1];

    let monthAchievement = await this.props.TodoStore.achievementList(
      dateMonth,
      currentUser.id
    );
    console.log(monthAchievement);

    monthAchievement.find((value) => {
      this.props.TodoStore.setAcheiveProp("title", value.achievment);
      this.props.TodoStore.setAcheiveProp("date", value.todoDate);
      let achievements = this.props.TodoStore.achievements;
      achievements.push(this.props.TodoStore.achievement);
      console.log(achievements);
    });
  }

  handleDateClick = (arg) => {
    const tdate = arg.dateStr;
    this.props.TodoStore.setDates(tdate);
    let date = this.props.TodoStore.date;
    console.log(date);
  };

  render() {
    let achievements = this.props.TodoStore.achievements;
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
