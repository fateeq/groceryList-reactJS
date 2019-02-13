import React from 'react';
import SearchBar from './SearchBar';
import MealsList from './MealsList';

const MealSuggestions = () => {
	return (
		<div id="mealSuggestions">
			<SearchBar/>
			<MealsList/>
		</div>
	);
}

export default MealSuggestions;