import React from 'react';

class DropDownMeals extends React.Component {
	constructor () {
		super()
		this.state = {

		}
	}

	handleClick = (event) => {
		const selectedMeal = event.target.innerText;
		this.props.callbackFromMealInput(selectedMeal);
	}

	render() {		
		return (
			<div id="dropDownMeals">
				<ul className="list pa1 ma0">
					{
						this.props.filteredMeals.map( (x, index) => <li className="ph1" onClick={this.handleClick} key={index}> {x} </li> )
					}
				</ul>
			</div>
		);
	}
}


export default DropDownMeals;