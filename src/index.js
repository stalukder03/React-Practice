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

// setup vars

const personName = 'Sajib Talukder'
const personDesignation = 'Web Developer'

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
				<h4>{personName}</h4>
		)
}

const Designation = () => {
		return (
				<p style={{color:'#777',fontStyle:'italic'}}>{personDesignation.toUpperCase()}</p>
		)
}

let inlineStyle = {
	color:'red',
	fontWeight: 'bold'
}

const Email = () => {
		return (
				<p style={inlineStyle}>hello@sajib.me</p>
		)
}

ReactDOM.render(<Gretting />, document.getElementById('root'));
