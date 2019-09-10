import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';

async function loadGreeting() {
  const response = await fetch('http://localhost:9001/graphql', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({query:'{greeting}'})
  });
  const responseBody = await response.json();
  return responseBody.data.greeting;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {greeting: ''};
    loadGreeting().then((greeting) => this.setState({greeting}))
  }
  render() {
    const {greeting} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {greeting} 
        </header>
      </div>
    )
  }
}
