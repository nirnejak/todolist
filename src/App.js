// Importing Modules
import React, { Component } from 'react';
import uuid from 'uuid';

// Importing Components
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Get Milk and Eggs',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with Girlfriend',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with Client',
        completed: true
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if(todo.id === id)
            todo.completed = !todo.completed;
          return todo;
        })
      });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;