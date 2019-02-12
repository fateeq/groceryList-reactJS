import React from 'react';
import SectionTitle from './SectionTitle';
import Calendar from './Calendar';
import AddWeek from './AddWeek';
import ShowMealSuggestions from './ShowMealSuggestions';

const MealPlan = () => {
	return (
		<div>
			<SectionTitle text="Weekly Meal Plan"/>
			<Calendar/>
			<div id="calendarFeatures" className="flex-container">	
				<AddWeek/>
				<ShowMealSuggestions/>
			</div>
		</div>
	);
}

export default MealPlan;