import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home Link",
      homeTest:"123",
      bindValue:"bind"
    }
  }

  onGreet() {
    alert('Hello');
  }

  onGreet1(age) {
    alert(age);
  }

  onGreet2(content){
    this.setState({
      homeTest:content
    })
  }

  render() {
    const user = {
      name: 'Cooler',
      age: 30,
      hobbies: ['Run', 'Eat']
    }
    return (
      <div className="App">
        <Header homeLink={this.state.homeTest} />
        <div><h1>APP</h1></div>
        {2 + 2}<br />
        {"Hello World"}<br />
        {true ? 'True' : 'False'}<br />
        <Home user={user} greet={this.onGreet} greet1={this.onGreet1} greet2={this.onGreet2.bind(this)} initialName={this.state.bindValue} />
        <label>{this.state.bindValue}</label>
      </div>
    );
  }
}

export default App;
