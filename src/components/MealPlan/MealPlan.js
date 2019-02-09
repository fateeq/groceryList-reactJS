import React from 'react';
import './MealPlan.css';
import SectionTitle from '../SectionTitle';
import Calendar from './subcomponents/Calendar';
import AddWeek from './subcomponents/AddWeek';
import ShowMealSuggestions from './subcomponents/ShowMealSuggestions';

const MealPlan = () => {
	return (
		<div>
			<SectionTitle text="Your Meal Plan"/>
			<Calendar/>
			<div id="calendarFeatures" className="flex-container">	
				<AddWeek/>
				<ShowMealSuggestions/>
			</div>
		</div>
	);
}

export default MealPlan;