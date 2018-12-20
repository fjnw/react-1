import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Adam", age: 40},
      {name: "Jess", age: 18}
    ],
    otherState: "other value",
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(personIndex, 1);
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  };

  nameChangedHandler  = (event) => {
    this.setState({
      persons: [
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((persons, index) => {
          return <Person 
            click={() => this.deletePersonHandler(index)}
            name={persons.name} 
            age={persons.age} /> 
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Testing react app</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons </button>

        {persons}
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hi, I\'m an element'));
  }
}

export default App;
