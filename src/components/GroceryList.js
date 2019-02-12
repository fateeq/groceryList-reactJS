import React from 'react';
import SectionTitle from './SectionTitle';
import List from './List';
import ShowCategorySuggestions from './ShowCategorySuggestions';

const GroceryList = () => {
	return (
		<div>
			<SectionTitle text="Your Grocery List"/>
			<List/>
			<ShowCategorySuggestions/>
		</div>	
	);
}

export default GroceryList;