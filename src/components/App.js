import React, { Component } from 'react';
import Search from './Search'
import List from './List'
import Details from './Details'

class App extends Component {
  render() {
    return (
      <div className="App"
           style={{
             textAlign: 'center'
           }}
      >
        <h1>Github viewer</h1>
        <hr />
        <Search />
        <List />
        <Details />
      </div>
    );
  }
}

export default App;
