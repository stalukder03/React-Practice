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

const persons = [
	{
		id:1,
		name: 'Sajib Talukder',
		position: 'Web Developer',
		email: 'hello@sajib.me'
	},
	{
		id:2,
		name: 'Samia',
		position: 'Software Engineer',
		email: 'samia@sajib.me'
	}
]

function Gretting() {
	return (
		<>
			<div className='persons-list'>
				{persons.map(person => {
					return <Person key={person.id} {...person}/>
				})}
			</div>
		</>
	);
}

const Person = ({name,position,email}) => {
	 // const {name,position,email} = props
		return (
				<>
					<section>
							<h4>{name}</h4>
							<p style={{color:'#777',fontStyle:'italic'}}>{position}</p>
							<p style={inlineStyle}>{email}</p>
					</section>
				</>
		)
}

ReactDOM.render(<Gretting />, document.getElementById('root'));
