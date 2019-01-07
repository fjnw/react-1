import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';


class Person extends Component  {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside Constructor', props);
    this.inputElement = React.createRef();


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
    console.log("[Person.js] inside componentWillMount()")
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount()');
    if (this.props.position === 0 ) {
      this.inputElement.current.focus();
    }  }

  focus() {
      this.inputElement.current.focus();
  }

  render () {
    console.log(['[Person.js] inside render()'])

    return (
      <>
        {this.props.authenticated ? <p>I'm authenticated.</p> : null}
        <p onClick={this.props.click}>I am {this.props.name} and am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input 
          ref={this.inputElement}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name}/>
      </>
    )
    // return [
    //   <p key="1" onClick={this.props.click}>I am {this.props.name} and am {this.props.age} years old</p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
    // ]
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
  // changed: PropTypes.func 
};

export default withClass(Person, classes.Person); 