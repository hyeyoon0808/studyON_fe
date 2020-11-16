import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import TodoView from "../view/TodoView";
import generateId from "../view/IDGenerator";

@inject("TodoStore")
@observer
class TodoContainer extends Component {
  componentDidMount() {
    console.log("todoContainer: ");
  }

  onSelectTodo = (id) => {
    this.props.TodoStore.selectTodo(id);
  };

  onSetTodoProp = (name, value) => {
    console.log(name, value);
    this.props.TodoStore.setTodoProp(name, value);
  };

  onAddTodo = () => {
    let todo = this.props.TodoStore.todo;
    console.log(JSON.stringify(todo));
    //todo = { ...todo, id: generateId(5) };
    this.props.TodoStore.addTodo(todo);
  };

  onRemoveTodo = () => {
    let todo = this.props.TodoStore.todo;
    this.props.TodoStore.removeTodo(todo.todoNum);
  };

  onModifyTodo = () => {
    let todo = this.props.TodoStore.todo;
    this.props.TodoStore.modifyTodo(todo);
  };

  render() {
    const { todo } = this.props.TodoStore;
    const todos = this.props.TodoStore.getTodos;
    return (
      <TodoView
        todo={todo}
        todos={todos}
        onSetTodoProp={this.onSetTodoProp}
        onAddTodo={this.onAddTodo}
        onRemoveTodo={this.onRemoveTodo}
        onModifyTodo={this.onModifyTodo}
        onSelectTodo={this.onSelectTodo}
      />
    );
  }
}

export default TodoContainer;
