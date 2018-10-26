import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Navbar from './layout/navbar/Navbar';
import './App.css';

class App extends Component { // todo add routing
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar></Navbar>
        </header>
        <body>
          <Button variant="contained" color="primary">
            Body
          </Button>
        </body>
      </div>
    );
  }
}

export default App;
