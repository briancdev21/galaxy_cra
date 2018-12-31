import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/index';
import SecondPage from './pages/second';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={MainPage} />
        <Route path="/second" exact component={SecondPage} />
      </div>
    );
  }
}

export default App;
