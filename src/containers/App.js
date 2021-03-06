import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] inside Constructor', props);
    this.state = {
      persons: [
        {id: "1", name: "Max", age: 28},
        {id: "2", name: "Adam", age: 40},
        {id: "3", name: "Jess", age: 18}
      ],
      otherState: "other value",
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }

  componentWillMount() {
    console.log("[App.js] inside componentWillMount()")
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()')
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('[UPDATE] App.js] inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  //   // return true;
  // }

  componentWillUpdate (nextProps, nextState) {
    console.log('[UPDATE App.js inside componentWillUpdate()', nextProps, nextState)
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "[App.js] inside getDerivedStateFromProps()", 
      nextProps, 
      prevState,
    );
    
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log("[App.js] inside getSnapshotBeforeUpdate()")
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js inside componentDidUpdate()')
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
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {

    console.log('[App.js] inside render()');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated} />
    }

    return (
        <>
        <button onClick={() => {this.setState({showPersons:true})}}>Show Persons</button>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons} 
            login={this.loginHandler}
            clicked={this.togglePersonsHandler} />
          
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
           </AuthContext.Provider>
        </>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hi, I\'m an element'));
  }
}

export default withClass(App, classes.App);
