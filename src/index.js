import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css'

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
					<section>
						<Name/>
						<Designation/>
						<Email/>
					</section>
				</>
		)
}

const Name = () => {
		return (
				<h4>Sajib Talukder</h4>
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

ReactDOM.render(<Gretting />, document.getElementById('root'));
