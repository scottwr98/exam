import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {array} from 'prop-types'


//dumb component
const Details=(props)=> {
    //filter the data down to just the item requested based on the route
    const selectedRepo = props.data[(props.match.params.id)-1] 
    return (
      <div className="List"
           style={{
             maxWidth: '600px',
             minWidth: '300px',
             margin: '0 auto',
             textAlign: 'center'
           }}
      >
        <h2>{selectedRepo.name} details</h2>
        <div className="row"
             style={{
               textAlign: 'left'  
             }}>
            <Link to="/"
                  style={{
                        position:'absolute',
                        top:'0',
                        right:'0'
                  }}
            >
                <button>Home</button>
            </Link>
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
                        <td>{selectedRepo.stargazers_count}</td>
                        <td>{selectedRepo.forks_count}</td>
                        <td>{selectedRepo.language}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>

    );
}

Details.propTypes = {
    data : array.isRequired
}

export default Details;
