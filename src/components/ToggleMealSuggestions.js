import React from 'react';
import ShowMealSuggestions from './ShowMealSuggestions';
import HideMealSuggestions from './HideMealSuggestions';

class ToggleMealSuggestions extends React.Component {
	constructor() {
		super()
		this.state = {
			isToggleOn: true
		}
	}

	handleClick = () => {
		this.setState(
		 state => ({ isToggleOn : !state.isToggleOn }) 
		);
		let toggleValue = this.state.isToggleOn;
		this.props.callbackFromParent(toggleValue);
	}

	render() {
		return (
			<div onClick={this.handleClick} className="showSuggestionsBtn">
				{this.state.isToggleOn ? <ShowMealSuggestions/> : <HideMealSuggestions/> }
			</div>
		);
	}
}

export default ToggleMealSuggestions;