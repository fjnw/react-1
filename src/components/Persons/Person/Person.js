import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component  {

  constructor(props) {
    super(props);
    console.log('[Person.js] inside Constructor', props);
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
    console.log("[Person.js] inside componentWillMount()")
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount()')
  }

  render () {
    console.log(['[Person.js] inside render()'])

    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I am {this.props.name} and am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    )
  }
}

export default Person; 