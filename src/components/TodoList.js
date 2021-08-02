// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import styled from "styled-components";
import React from "react";
import { Component } from "react";
import Todo from "./Todo";

const TodoListStyle = styled.div`
  background: white;
  margin: 2rem auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .singleTask {
    display: center;
    width: 80%;
  }
  & button {
    background: #16474a;
    color: white;
    margin: 1rem;
    width: 30%;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    display: center;
  }
`;

class TodoList extends Component {
  clearCompletedTasks = (e) => {
    e.preventDefault();
    this.props.onHandleClearTask();
  };

  render() {
    return (
      <TodoListStyle>
        <div className="singleTask">
          {this.props.tasks.map((task) => {
            return (
              <Todo
                task={task}
                key={task.id}
                onHandleCompeted={this.props.onHandleCompeted}
              />
            );
          })}
        </div>

        <button onClick={this.clearCompletedTasks}>Clear completed </button>
      </TodoListStyle>
    );
  }
}

export default TodoList;
