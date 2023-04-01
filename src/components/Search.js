import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearch }) => {
	return (
		<div className='search'>
			<MdSearch className='noteSearchIcon' size='20px' />
			<input
				onChange={(event) => handleSearch(event.target.value)}
				type='text'
				placeholder='Type to Search...'/>
		</div>
	);
};

export default Search;
