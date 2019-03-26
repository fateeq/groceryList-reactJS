import React from 'react';

const MealsList = ({ meals }) => {
	return (
		<div id="mealsList">
			<ul>
				{
					meals.map( (x,index) => <li key={index}> {x.mealName} </li>)
				}
			</ul>
		</div>
	);
}

export default MealsList;