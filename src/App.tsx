import React, { Component } from 'react';
import Issues_Class from './components/Issues_Class';
import Issues_Functional from './components/Issues_Functional';

class App extends Component {
  render() {
    return (
      <div style={{padding: "1rem"}}>
        App
        <hr />
        {/* <Issues_Class /> */}
        <Issues_Functional />
      </div>
    );
  }
}

export default App;