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
			<h1>Welcome to React basic practice.</h1>
			<input type="text" name="" id="" />
		</>
	);
}

ReactDOM.render(<Gretting />, document.getElementById('root'));
