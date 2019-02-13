import React from 'react';
import { meals } from '../data/meals.js';

const MealsList = ({mealName}) => {
	return (
		<div id="mealsList">
			<ul>
				{
					meals.map((meal, i) => {
						return <li>{meals[i].mealName}</li>
					})
				}
			</ul>
		</div>
	);
}

export default MealsList;