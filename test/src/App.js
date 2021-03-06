import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://secure.meetupstatic.com/photos/event/c/2/9/3/global_465829811.jpeg" className="App-logo" alt="logo" />
          <h1 className="App-title">Göteborg Lounge Hackers</h1>
        </header>
        <Todos/>
      </div>
    );
  }
}

export default App;
