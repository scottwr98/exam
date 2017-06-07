import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios';

//component dependencies
import Search from './Search'
import List from './List'
import Details from './Details'

class App extends Component {
  state={
    search : {searchText : '',
              selectedUser : '',
              error : false},
    repoData : [],
    filter : 'All'
  }

  setSearchState = (searchText, selectedUser='')=>{
    //sets the search object state
    const newSearch = {...this.state.search}
    newSearch.searchText = searchText
    
    //set the new selected user if its not blank
    if (selectedUser != '')
      newSearch.selectedUser = selectedUser

    //set the state
    this.setState({
      search: newSearch
    })
  }

  setErrorState = (state)=>{
    //sets the search object state
    const newSearch = {...this.state.search}
    newSearch.error = state
    
    //set the state
    this.setState({
      search: newSearch
    })
  }
  setFilter = (filter)=>{
    //sets the filter state
    this.setState({
      filter : filter
    })
  }
  getData=()=>{
    //gets the list of repo data for a user on github.com
    axios.get(`https://api.github.com/users/${this.state.search.searchText}/repos`)
         .then((response) => {
            const fixedData = response.data.map((item)=>{
              //change any null languages to "N/A"
              if (item.language === null)
                  item.language = 'N/A'
              return item
            })
            this.setErrorState(false)
            this.setState({
                 repoData: fixedData
            })
         })
         .catch((response)=>{
            //user not found or some other error i guess...
            this.setState({
                search : {searchText : '',
                          selectedUser : '',
                          error: true},
                repoData : [],
                filter : 'All'
            })
         })

  }

  render(){
    //filter data based on current filter and send it to the List component
    const filteredData = this.state.repoData.filter((item)=>{
        const {filter} = this.state
        if (filter === 'All')  //handle default filter of all
          return true
        else
          return (filter === item.language)
    })

     //build an object with unique languages as keys
     const languageObject = this.state.repoData.reduce((languages,row)=>{
                              languages[row.language]=true                              
                              return languages
                            },{})

    //add the 'All' option
    languageObject.All=true

    //sort it -- send it to the list component
    const languageOptions = Object.keys(languageObject).sort()

    //check if there should be an error
    const maybeError = this.state.search.error ? (<p style={{
                                      backgroundColor: 'pink',
                                      color: 'red',
                                      maxWidth: '600px',
                                      minWidth: '300px',
                                      margin: '0 auto'
                                  }}>Unknown username!
                              </p>) : null

    //return UI
    return (
      <Router>
        <div className="App"
            style={{
              textAlign: 'center'
            }}
        >
          <h1>Github viewer</h1>
          <hr />
          <Route exact path="/" render={(props) => {
                        return(
                        <div>
                          {maybeError}
                          <Search {...props}
                                  searchText={this.state.search.searchText}
                                  setSearch={this.setSearchState}
                                  getData={this.getData}/>
                          <List {...props} 
                                 data={filteredData}
                                 userName={this.state.search.selectedUser}
                                 setFilter={this.setFilter}
                                 filter={this.state.filter}
                                 options={languageOptions}/>
                        </div>)
                    }} />
          <Route path="/repos/:id" render={(props) => {
                        return <Details {...props} 
                                        data={filteredData}
                               />
                    }} />
        </div>
      </Router>
    );
  }
}

export default App;
