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

const inlineStyle = {
	color:'red',
	fontWeight: 'bold'
}

function Gretting() {
	return (
		<>
			<Person name={personName} position={personDesignation}/>
			<Person name={personName} position={personDesignation}/>
			<Person name={personName} position={personDesignation}/>
			<Person name={personName} position={personDesignation}/>
		</>
	);
}

const Person = ({name,position}) => {
	 // const {name,position} = props
		return (
				<>
					<section>
							<h4>{name}</h4>
							<p style={{color:'#777',fontStyle:'italic'}}>{position}</p>
							<p style={inlineStyle}>hello@sajib.me</p>
					</section>
				</>
		)
}

ReactDOM.render(<Gretting />, document.getElementById('root'));
