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
			<Person/>
			<Person/>
			<Person/>
		</>
	);
}

const Person = () => {
		return (
				<>
					<Name/>
					<Designation/>
					<Email/>
					<Seperator/>
				</>
		)
}

const Name = () => {
		return (
				<p>Sajib Talukder</p>
		)
}
const Designation = () => {
		return (
				<p>Web Developer</p>
		)
}

const Email = () => {
		return (
				<p>hello@sajib.me</p>
		)
}
const Seperator = () => {
		return (
				<hr/>
		)
}

ReactDOM.render(<Gretting />, document.getElementById('root'));
