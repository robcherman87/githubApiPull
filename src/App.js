import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// http://api.github.com/users/john

import UserForm from './components/UserForm';

class App extends Component {
  constructor() {
    super();
    this.state = { repos: null }
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`http://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
        this.setState({ repos });
      })
    } else return;
  }

  getLocation 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
        <UserForm getUser={this.getUser} />
        { this.state.repos ? <p> Number of repos: { this.state.repos }</p> :
        <p>Please enter a username.</p> } 
        <div>
        </div>
      </div>
    );
  }
}

export default App;
