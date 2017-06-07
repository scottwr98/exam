import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form style={{
          borderTop : 'thin solid black',
          borderBottom : 'thin solid black',
          maxWidth: '600px',
          minWidth: '300px',
          margin: '0 auto'
        }}
      >
        <p>Search repositories by username</p>
        <input type="text" placeholder="username"/>
        <input className="button"
               type="submit" 
               value="Search"/>
      </form>
    );
  }
}

export default Search;
