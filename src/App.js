import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <button>Add</button>
        <div>
          <span>Phone</span><br />
          <span>Name</span><br />
        </div>
      </div>
    );
  }
}

export default App;
