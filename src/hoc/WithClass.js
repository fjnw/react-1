import React, {Component} from 'react';


// HOC returns functional component
// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   )
// }

// HOC returns class on demand (annonymous stateful component to gain access to lifecycle hooks)
const withClass = (WrappedComponent, className) => {
  return class extends Component {
    render () {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
};

export default withClass;