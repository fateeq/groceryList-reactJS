import React from 'react';
import SectionTitle from './SectionTitle';
import Calendar from './Calendar';
import AddWeek from './AddWeek';
import ShowMealSuggestions from './ShowMealSuggestions';
import MealSuggestions from './MealSuggestions';

const MealPlan = () => {
	return (
		<div className="section">
			<SectionTitle text="Meal Plan"/>
			<Calendar/>
			<div id="calendarFeatures" className="flex-container">	
				<AddWeek/>
				<ShowMealSuggestions/>
			</div>
			<MealSuggestions/>
		</div>
	);
}

export default MealPlan;