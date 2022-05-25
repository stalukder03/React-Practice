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
			<div className='persons-list'>
				<Person name={personName} position={personDesignation}>
					<p>You don’t need to install or configure tools like webpack or Babel.
					They are preconfigured and hidden so that you can focus on the code.</p>
				</Person>
				<Person name={personName} position={personDesignation}/>
				<Person name={personName} position={personDesignation}/>
				<Person name={personName} position={personDesignation}/>
			</div>
		</>
	);
}

const Person = ({name,position,children}) => {
	 // const {name,position} = props
		return (
				<>
					<section>
							<h4>{name}</h4>
							<p style={{color:'#777',fontStyle:'italic'}}>{position}</p>
							<p style={inlineStyle}>hello@sajib.me</p>
							{children}
					</section>
				</>
		)
}

ReactDOM.render(<Gretting />, document.getElementById('root'));
