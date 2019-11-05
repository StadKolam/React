import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { robots } from './robots'; 


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
            checkBoxValue: true
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log("searchbox")
    }

    onCheckChange = (event) => {
        this.setState({ checkBoxValue: event.target.checked })
    }

    

    render() {
        let filteredRobots = this.state.robots
        
        if(this.state.checkBoxValue === true) {
            console.log("fasza")
            filteredRobots = this.state.robots.filter(robot => {
                return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            })
        } else {
            console.log("nem fasza")
        }
        
        
        if (this.state.robots.length === 0 ){
            return <h1>Loading </h1>
        } else {
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={ filteredRobots } checkChange={ this.onCheckChange } checkValue={ this.state.checkBoxValue }/>
                </div>
                
            );

        }
        

    }
    
}

export default App;