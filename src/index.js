import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css'
import {persons} from './persons'  // normal export var name can not be  changed
import NewPerson from './Person'  // default export var name can be changed to whatever we want

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
			<div className='persons-list'>
				{persons.map(person => {
					return <NewPerson key={person.id} {...person}/>
				})}
			</div>
		</>
	);
}


ReactDOM.render(<Gretting />, document.getElementById('root'));
