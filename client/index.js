import React, { Component } from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import './styles/main.css';

class App extends Component {
  render() {
    return <Main />;
  }
}

render(<App />, document.querySelector('#root'));