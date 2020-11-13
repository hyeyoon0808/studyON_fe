import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import NewCalendar from "./NewCalendar";

@inject("TodoStore")
@observer
class CalendarContainer extends Component {
    handleDateClick = (arg) => {
        // bind with an arrow function
        console.log(arg.dateStr);
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