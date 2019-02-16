import React from 'react';
import SectionTitle from './SectionTitle';
import Calendar from './Calendar';
import AddWeek from './AddWeek';
import ToggleMealSuggestions from './ToggleMealSuggestions';
import MealSuggestions from './MealSuggestions';

class MealPlan extends React.Component {
	constructor() {
		super()
		this.state = {
			toggleValue: ''
		}
	}

	myCallBack = (toggleValue) => {
		this.setState({ toggleValue: toggleValue });
	}

	render() {
		return (
			<div className="section">
				<SectionTitle text="Meal Plan"/>
				<Calendar/>
				<div id="calendarFeatures" className="flex-container">	
					<AddWeek/>
					<ToggleMealSuggestions callbackFromParent = {this.myCallBack}/>
				</div>
				<MealSuggestions toggleValueFromParent={this.state.toggleValue} />
			</div>
		);
	}
}

export default MealPlan;