import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import TodoView from "../view/TodoView";
import generateId from "../view/IDGenerator";

@inject("TodoStore", "UserStore")
@observer
class TodoContainer extends Component {
  componentDidMount() {
    console.log("todoContainer: ");
    const { TodoStore } = this.props;
    let currentUser = this.props.UserStore.currentUser;
    let date = this.props.TodoStore.date;
    TodoStore.todoList(currentUser.id, date);
  }

  onSelectTodo = (id) => {
    this.props.TodoStore.selectTodo(id);
  };

  onSetTodoProp = (name, value) => {
    console.log(name, value);
    this.props.TodoStore.setTodoProp(name, value);
  };

  onAddTodo = () => {
    let currentUser = this.props.UserStore.currentUser;
    this.onSetTodoProp("userId", currentUser.id);
    let date = this.props.TodoStore.date;
    this.onSetTodoProp("todoDate", date);
    let todo = this.props.TodoStore.todo;
    //todo = { ...todo, id: generateId(5) };
    this.props.TodoStore.addTodo(todo);
    console.log(JSON.stringify(todo));
  };

  onRemoveTodo = () => {
    //let todo = this.props.TodoStore.todo;
    let dateTodo = this.props.TodoStore.dateTodo;
    dateTodo.todos.find((todo) => {
      return this.props.TodoStore.removeTodo(todo.id);
    });
  };

  onModifyTodo = () => {
    let todo = this.props.TodoStore.todo;
    this.props.TodoStore.modifyTodo(todo);
  };

  onTodoCheck = (e) => {
    this.onSetTodoProp("isComplete", e.target.checked);
    let todo = this.props.TodoStore.todo;
    console.log(todo);
  };

  render() {
    const { todo } = this.props.TodoStore;
    // const todos = this.props.TodoStore.getTodos;
    const dateTodo = this.props.TodoStore.getDateTodo;
    return (
      <TodoView
        todo={todo}
        // todos={todos}
        dateTodo={dateTodo}
        onSetTodoProp={this.onSetTodoProp}
        onAddTodo={this.onAddTodo}
        onRemoveTodo={this.onRemoveTodo}
        onModifyTodo={this.onModifyTodo}
        onSelectTodo={this.onSelectTodo}
        onTodoCheck={this.onTodoCheck}
      />
    );
  }
}

export default TodoContainer;
