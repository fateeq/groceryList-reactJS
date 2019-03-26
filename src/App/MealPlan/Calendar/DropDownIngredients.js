import React from 'react';

const DropDownIngredients = ({ filteredItems }) => {
	return (
		<div id="dropDownIngredients">
			<ul className="list pa1 ma0">
				{
					filteredItems.map( (x,index) => <li className="ph1" key={index} >{x}</li>)
				}
			</ul>
		</div>
	);
}

export default DropDownIngredients;