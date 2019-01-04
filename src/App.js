import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Get Milk and Eggs',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with Girlfriend',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with Client',
        completed: false
      }
    ]
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;