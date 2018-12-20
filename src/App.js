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

  switchInfoHandler = (newName) => {
    this.setState({
      people: [
        {name: newName, age: 28},
        {name: "Adam", age: 40},
        {name: "Jess", age: 18}
      ],
      otherState: 'some other value',
      showPerosns: false
    })
  }

  nameChangedHandler  = (event) => {
    this.setState({
      people: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 40},
        {name: "Jess", age: 18}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Testing react app</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {this.state.showPersons ? 
        // {this.state.showPersons === true ?
        <div >
          <Person 
            name={this.state.people[0].name}
            age={this.state.people[0].age}
            click={this.switchInfoHandler.bind(this, ".bind(this, ' ')")}/>
          <Person 
            name={this.state.people[1].name}
            age={this.state.people[1].age}
            changed={this.nameChangedHandler}
            >Props children</Person>
          <Person 
            name={this.state.people[2].name}
            age={this.state.people[2].age}/>
        </div> : null
      }
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hi, I\'m an element'));
  }
}

export default App;
