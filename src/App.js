import React from 'react';
import Form from './components/TodoComponents/TodoForm';
import List from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    inputValue: '',
    todos: [
    ]

  }

  handleChange = (evnt) => {
    this.setState({ inputValue: evnt.target.value });
  }

  handleClick = (index) => {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  }

  handleSubmit = (evnt) => {
    evnt.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };

    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos, inputValue: '' })
  }

  render() {
    return (
      <div>
        <Form
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit}
        />
        <List
          handleClick={this.handleClick}
          todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
