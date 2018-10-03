import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* <div className="header">
          Phone Directory
		</div>
        <button>Add</button>
        <div>
          <span>Phone</span><br />
          <span>Name</span><br />
        </div> */}
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" placeholder="Your Name" defaultValue="Vijay"/>
      </div>
    );
  }
}

export default App;
