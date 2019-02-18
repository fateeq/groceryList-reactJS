import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);

const SearchBar = ({searchChange}) => {
	return (
		<div id="searchBar">
			<FontAwesomeIcon icon="search" size="xs"/>
			<input 
				type="text" 
				placeholder="Search meals"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBar;