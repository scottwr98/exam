import React, { Component } from 'react';
import {string, func} from 'prop-types'

//dumb component
const Search=(props)=>  {
  const handleSubmit=(event)=>{
    //prevent default form submit action
    event.preventDefault()

    //set the search term AND the selected/submitted search term
    props.setSearch(props.searchText,props.searchText)

    //ask parent to get some data
    props.getData()

    
  }

  const handleChange=(event)=>{
    //handles a change in the search text box
    //parent holds the state for search term
    props.setSearch(event.target.value)

  }
    return (
      <form onSubmit={handleSubmit}
            style={{
              borderTop : 'thin solid black',
              borderBottom : 'thin solid black',
              maxWidth: '600px',
              minWidth: '300px',
              margin: '0 auto'
            }}
      >
        <p>Search repositories by username</p>
        <input type="text" 
               placeholder="username"
               value={props.searchText}
               onChange={handleChange}/>
        <input className="button"
               type="submit" 
               value="Search"
               disabled={props.searchText===''}/>
      </form>
    );
  
}
Search.propTypes = {
  searchText: string.isRequired,
  setSearch: func.isRequired,
  getData: func.isRequired
}

export default Search;
