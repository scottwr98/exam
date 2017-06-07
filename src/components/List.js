import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {func, string, array} from 'prop-types'

//didn't have time to do loading spinner....  i would switch this to a class and
//give a state for loading status
//modify the status with componentDidMount
//show stuff only if the loading state was done, or spinner if not done..

//dumb component
const List=(props)=> {
  const handleChange=(event)=>{
    //handles change of filter drop down
    props.setFilter(event.target.value)
  }

    //build an array of links to users repositories
    const tableRows = props.data.map((row, index)=>{
                        return(
                          <tr key={row.id}><td><Link to={`/repos/${index+1}`}>{row.name}</Link></td></tr>
                        )
                      })



    //using the keys array, create array of select options for language filter
    const languageOptions = props.options.map((item)=>{
                              return (<option key={item} value={item}>{item}</option>)
                            })

    return (
      //will return a null if no repo data, or it will return the list component
      props.userName==='' ? null :
      <div className="List"
           style={{
             maxWidth: '600px',
             minWidth: '300px',
             margin: '0 auto',
             textAlign: 'center'
           }}
      >
        <h2>{props.userName}'s repositories</h2>
        <p>Filter repos by primary language</p>
        <select style={{
                  width: 'auto',
                  minWidth:'200px',
                  margin: '0 auto' 
        }}
                onChange={handleChange}>
          {languageOptions}
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
                  {tableRows}
                </tbody>
            </table>
        </div>
      </div>
    );
  
}

List.propTypes = {
  data: array.isRequired,
  userName: string.isRequired,
  filter: string.isRequired,
  setFilter: func.isRequired,
  options: array.isRequired
}

export default List;
