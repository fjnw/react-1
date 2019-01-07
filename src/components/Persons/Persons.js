import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[Persons.js] inside Constructor', props);
    this.lastPersonRef = React.createRef();
   
    // this.state = {
    //   persons: [
    //     {id: "1", name: "Max", age: 28},
    //     {id: "2", name: "Adam", age: 40},
    //     {id: "3", name: "Jess", age: 18}
    //   ],
    //   otherState: "other value",
    //   showPersons: false
    // }
  }

  componentWillMount() {
    console.log("[Persons.js] inside componentWillMount()")
  }

  componentDidMount() {
    console.log('[Persons.js] inside componentDidMount()');
    this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps (nextProps) {
    console.log('[UPDATE Persons.js] inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log('[UPDATE] Persons.js] inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked;
  //   // return true;
  // }

  componentWillUpdate (nextProps, nextState) {
    console.log('[UPDATE Persons.js inside componentWillUpdate()', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js inside componentDidUpdate()')
  }

  render () {
    console.log(['[Persons.js] inside render()'])

    return this.props.persons.map( (person, index) => {
      return <Person
        name={person.name} 
        age={person.age}
        position={index}
        key={person.id}
        ref={this.lastPersonRef}
        authenticated={this.props.isAuthenticated}
        click={() => this.props.clicked(index)}
        changed={( event ) => this.props.changed(event, person.id)} /> 
    });
  }
}

export default Persons;