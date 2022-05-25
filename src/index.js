import React from 'react';
import ReactDOM from 'react-dom';

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element //cee
// formatting

function Gretting() {
	return (
		<>
			<Person/>
			<Message/>
		</>
	);
}

const Person = () => {
		return (
				<h4>Sajib Talukder</h4>
		)
}

const Message = () => {
		return (
				<p>Welcome to you</p>
		)
}

ReactDOM.render(<Gretting />, document.getElementById('root'));
