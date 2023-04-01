import React from 'react';

const Header = ({ handleToggleMode }) => {
	return (
		<div className='header'>
			<h1>Make Notes</h1>
			<button className='save'
				onClick={() => handleToggleMode((previousMode) => !previousMode)}>
				Toggle Theme
			</button>
		</div>
	);
};

export default Header;
