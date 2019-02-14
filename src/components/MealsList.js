import React from 'react';

const MealsList = ({ meals }) => {
	return (
		<div id="mealsList">
			<ul>
				{
					meals.map((iAmCurrentValue, i) => {
						return <li>{meals[i].mealName}</li>
					})
				}
			</ul>
		</div>
	);
}

export default MealsList;