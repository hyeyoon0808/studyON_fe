import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import NewCalendar from "./NewCalendar";
// import DateFunction from "./DateFunction"


@inject("TodoStore")
@observer
class CalendarContainer extends Component {
    handleDateClick = (arg) => {
        // bind with an arrow function
        const tdate = arg.dateStr;
        this.setState({ date: tdate });
        this.props.TodoStore.setDates(this.state.date);
        console.log(this.state.date);
    };
    render() {
        return <NewCalendar handleDateClick={this.handleDateClick} />;
    }
}

export default CalendarContainer;