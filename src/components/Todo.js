import React from "react";
import { Component } from "react";
import "./Todo.css";
class Todo extends Component {
  itemHandler = () => {
    this.props.onHandleCompeted(this.props.task.id);
  };

  render() {
    return (
      <div
        className={`item ${this.props.task.completed ? "completed" : ""}`}
        onClick={this.itemHandler}
      >
        {this.props.task.task}
      </div>
    );
  }
}

export default Todo;
