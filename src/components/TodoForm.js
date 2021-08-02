import React from "react";
import { Component } from "react";
import "./Todo.css";
import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & button {
    background: #16474a;
    margin: 0.4rem;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    width: 30%;
  }

  & input {
    padding: 0.5rem 1rem;
    width: 70%;
    margin: 1rem auto;
  }
`;

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

  inputHandler = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    if (this.state.inputValue.trim().length === 0) {
      return;
    }
    this.props.onSubmitForm(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <FormStyle>
        <input
          placeholder="Add your todo here."
          type="text"
          onChange={this.inputHandler}
          value={this.state.inputValue}
        />
        <button onClick={this.submitForm}>Add Todo</button>
      </FormStyle>
    );
  }
}

export default TodoForm;
