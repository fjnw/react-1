import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

  constructor(props) {
    super(props);
    console.log('[Persons.js] inside Constructor', props);
    this.state = {
      persons: [
        {id: "1", name: "Max", age: 28},
        {id: "2", name: "Adam", age: 40},
        {id: "3", name: "Jess", age: 18}
      ],
      otherState: "other value",
      showPersons: false
    }
  }

  componentWillMount() {
    console.log("[Persons.js] inside componentWillMount()")
  }

  componentDidMount() {
    console.log('[Persons.js] inside componentDidMount()')
  }



  render () {

    console.log(['[Persons.js] inside render()'])
    return this.props.persons.map( (person, index) => {
      return <Person
        name={person.name} 
        age={person.age}
        key={person.id}
        click={() => this.props.clicked(index)}
        changed={( event ) => this.props.changed(event, person.id)} /> 
    });
  }
}

export default Persons;