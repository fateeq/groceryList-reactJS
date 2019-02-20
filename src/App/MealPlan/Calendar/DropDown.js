import React from 'react';

const DropDown = ({ filteredItems }) => {
	return (
		<div id="dropDown">
			<ul className="list pa2 ma0">
				{
					filteredItems.map( (iAmCurrentValue, i) => {
						return <li>{filteredItems[i]}</li>
					})
				}
			</ul>
		</div>
	);
}

export default DropDown;