import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div className="List"
           style={{
             maxWidth: '600px',
             minWidth: '300px',
             margin: '0 auto',
             textAlign: 'center'
           }}
      >
        <h2>scottwr98's repositories</h2>
        <p>Filter repos by primary language</p>
        <select style={{
                  width: 'auto',
                  minWidth:'200px',
                  margin: '0 auto' 
        }}>
          <option value="c#">c#</option>
          <option value="Java">Java</option>
        </select>

        <div className="row"
             style={{
               textAlign: 'left'  
             }}>
            <table className="table" >
                <thead> 
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><a href="#">Crazy_Counter</a></tr>
                    <tr><a href="#">Two</a></tr>
                    <tr><a href="#">Three</a></tr>
                </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default List;
