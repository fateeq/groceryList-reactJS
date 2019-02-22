import React from 'react';

const DropDown = ({ filteredItems }) => {
	return (
		<div id="dropDown">
			<ul className="list pa1 ma0">
				{
					filteredItems.map( (iAmCurrentValue, i) => {
						return <li className="ph1">{filteredItems[i]}</li>
					})
				}
			</ul>
		</div>
	);
}

export default DropDown;