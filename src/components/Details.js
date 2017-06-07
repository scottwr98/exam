import React, { Component } from 'react';

class Details extends Component {
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
        <h2>Crazy_Counter details</h2>
        <div className="row"
             style={{
               textAlign: 'left'  
             }}>
            <table className="table" >
                <thead> 
                    <tr>
                       <th>Stars</th>
                       <th>Forks</th>
                       <th>Primary Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>32</td>
                        <td>6</td>
                        <td>JavaScript</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>

    );
  }
}

export default Details;
