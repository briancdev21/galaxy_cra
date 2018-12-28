import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/index';
import SecondPage from './pages/second';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={MainPage} />
      </Router>
    );
  }
}

export default App;
