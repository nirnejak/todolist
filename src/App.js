// Importing Modules
import React, { Component } from "react";

// import uuid from 'uuid';  // Not Used Anymore

// Importing React-Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Importing Components
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

import "./App.css";
const uuidv1 = require("uuid/v1");

class App extends Component {
  state = {
    todos: []
  };

  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //     .then(res => this.setState({ todos: res.data }));
  // }

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = (title, created_at) => {
    console.log(title);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          title: title,
          created_at: created_at,
          completed: false,
          id: uuidv1()
        }
      ]
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <br />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
