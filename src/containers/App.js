import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {

  state = {
    persons: [
      {id: "1", name: "Max", age: 28},
      {id: "2", name: "Adam", age: 40},
      {id: "3", name: "Jess", age: 18}
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

  nameChangedHandler  = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; 
    });

    // const person = Object.assign({, this.state.persond[personIndex]})
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name= event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let btnClass = '';
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
      btnClass = classes.Red
    }

    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = []
    if (this.state.persons.length <=2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <=1) {
      assignedClasses.push(classes.bold);; // classes = ['red', 'bold']
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This  is working.</p>
          <button 
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons </button>

          {persons}
        </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hi, I\'m an element'));
  }
}

export default App;
