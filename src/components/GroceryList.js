import React from 'react';
import SectionTitle from './SectionTitle';
import List from './List';
import ShowAllIngredients from './ShowAllIngredients';

const GroceryList = () => {
	return (
		<div className="section">
			<SectionTitle text="Grocery List"/>
			<List/>
			<div id="ShowAllIngredientsContainer">	
				<ShowAllIngredients/>
			</div>
		</div>	
	);
}

export default GroceryList;