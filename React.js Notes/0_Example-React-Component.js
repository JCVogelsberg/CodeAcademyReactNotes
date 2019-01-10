Example of a React Component
-------------------------

// Import the things you need for React & the DOM
import React from 'react';
import ReactDOM from 'react-dom';


// Component Class: produces components, UpperCamelCased name
class Owl extends React.Component {
  render() {
		// A render() function must have a return statement
    return (   // Parentheses around multiple lines of JSX
    	<div>	  			// ONE element around everything!
      	<h1>{owl.title}</h1>
      	<img
      		src={owl.src}
  				alt={owl.title} />
      </div>  			// ONE element around everything!
    );
  }
};

// Kind of like calling a JS function
ReactDOM.render(
	<Owl />,   // This calls on the component class to create a component
  document.getElementById('app')  // This places the component
);
