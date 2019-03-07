import React from 'react';

class DropDownMeals extends React.Component {
	constructor () {
		super()
		this.state = {

		}
	}

	handleClick = (event) => {
		const selectedMeal = event.target.innerText;
		this.props.callbackFromParent(selectedMeal);
	}

	render() {		
		return (
			<div id="dropDownMeals">
				<ul className="list pa1 ma0">
					{
						this.props.filteredMeals.map( x => <li className="ph1" onClick={this.handleClick}> {x} </li> )
					}
				</ul>
			</div>
		);
	}
}


export default DropDownMeals;