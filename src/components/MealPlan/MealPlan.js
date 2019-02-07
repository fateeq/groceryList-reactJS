import React from 'react';
import Calendar from './subcomponents/Calendar';
import SectionTitle from '../SectionTitle';

const MealPlan = () => {
	return (
		<div>
			<SectionTitle text="Your Weekly Meal Plan"/>
			<Calendar/>
		</div>
	);
}

export default MealPlan;