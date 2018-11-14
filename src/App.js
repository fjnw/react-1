import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    people: [
      {name: "Max", age: 28},
      {name: "Adam", age: 40},
      {name: "Jess", age: 18}
    ],
    otherState: "other value"
  }

  switchInfoHandler = () => {
    this.setState({
      people: [
        {name: "Joe", age: 28},
        {name: "Mike", age: 40},
        {name: "Stephanie", age: 18}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Testing react app</h1>
        <button onClick={this.switchInfoHandler}>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>Props children</Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hi, I\'m an element'));
  }
}

export default App;
