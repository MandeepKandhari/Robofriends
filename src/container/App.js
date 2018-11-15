import React, { Component } from 'react';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'; 
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import { connect } from 'react-redux';

import { setSearchField, requestRobots } from '../actions'


const mapStateToProps = (state) =>{
  return{
    searchField:state.searchRobots.searchField,
    robots:state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onSearchChange: (event)=>dispatch(setSearchField(event.target.value)),
    onRequestRobots: ()=>dispatch(requestRobots())
  }
}



class App extends Component {
  
componentDidMount(){
  this.props.onRequestRobots();
}

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;

    const filterRobots = robots.filter(robots=>{
   return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      isPending 
      ?<h1>Loading</h1>
      :<div className='tc'>
        <h1>Robofriends</h1>
        <Searchbox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <Cardlist robots={filterRobots} />
          </ErrorBoundary>  
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
