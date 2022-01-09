import React, { Component } from 'react';
import Issues_Class from './components/Issues_Class';

class App extends Component {
  render() {
    return (
      <div style={{padding: "1rem"}}>
        App
        <hr />
        <Issues_Class />
      </div>
    );
  }
}

export default App;