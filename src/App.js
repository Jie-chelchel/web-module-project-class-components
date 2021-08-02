import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const AppStyle = styled.div`
  background: #383735;
  color: white;
  width: 100%;
  height: 100vh;
`;
const tasks = [
  { task: "Organize Garage", id: 1528817077286, completed: false },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = { tasks: tasks };
  }

  formSubmitHandler = (inputTask) => {
    console.log(inputTask);
    const newTask = {
      task: inputTask,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  handleCompletedTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    });
  };

  clearCompletedTask = () => {
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        return task.completed === false;
      }),
    });
  };

  render() {
    return (
      <AppStyle>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm onSubmitForm={this.formSubmitHandler} />
        <TodoList
          tasks={this.state.tasks}
          onHandleCompeted={this.handleCompletedTask}
          onHandleClearTask={this.clearCompletedTask}
        />
      </AppStyle>
    );
  }
}

export default App;
