import React from "react";
import { Component } from "react";
import "./Todo.css";
import styled from "styled-components";

const FormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & div {
    display: flex;
    width: 80%;
    margin: 1rem auto;
  }

  & button {
    background: #16474a;
    margin: 1rem;
    color: white;
    padding: 0.1rem 0.5rem;
    border-radius: 10px;
    width: 25%;
  }

  & input {
    padding: 0.5rem 2rem;
    width: 70%;
    margin: 1rem auto;
  }
`;

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      searchValue: "",
    };
  }

  inputHandler = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  searchHandler = (e) => {
    this.setState({ searchValue: e.target.value });
  };
  submitForm = (e) => {
    e.preventDefault();
    if (this.state.inputValue.trim().length === 0) {
      return;
    }
    this.props.onSubmitForm(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  searchTasks = (e) => {
    e.preventDefault();
    if (this.state.searchValue.trim().length === 0) {
      return;
    }
    this.props.onSearchTasks(this.state.searchValue);
    this.setState({ searchValue: "" });
  };

  render() {
    return (
      <FormStyle>
        <div>
          <input
            placeholder="Add your todo here."
            type="text"
            onChange={this.inputHandler}
            value={this.state.inputValue}
          />
          <button onClick={this.submitForm}>Add Todo</button>
        </div>
        <div className="searchBar">
          <input
            placeholder="Search your todo here"
            type="text"
            onChange={this.searchHandler}
            value={this.state.searchValue}
          />
          <button onClick={this.searchTasks}>Search</button>
        </div>
      </FormStyle>
    );
  }
}

export default TodoForm;
