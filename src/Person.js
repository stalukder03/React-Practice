import React from 'react'


const Person = ({name,position,email}) => {
	 // const {name,position,email} = props

		// attribute, eventHandler
		// onClick, onMouseOver
		const clickHandler = (e) =>{
			console.log(e)
			console.log(e.target)
			alert('hey! are you there?')
		}

		const complexExample = (author) =>{
			console.log(author)			
		}


 const inlineStyle = {
  color:'red',
  fontWeight: 'bold'
 }
		return (
				<>
					<section onMouseOver={()=>{
						console.log(email)
					}} >
							<h4 onClick={()=> console.log(`You clicked my ${name}`) }>{name}</h4>
							<p style={{color:'#777',fontStyle:'italic'}}>{position}</p>
							<p style={inlineStyle}>{email}</p>
							<button type='button' onClick={clickHandler}>Click Me</button>
							<button type='button' onClick={()=> complexExample(name)}>Complex Example</button>
					</section>
				</>
		)
}

export default Person