import React from 'react';

const withClass = (props) => (  // parenthesis instead of curly braces is implicit return like return()
  <div className={props.classes}>
    {props.children} 
  </div>
);

export default withClass;