import React from 'react';
import { meals } from '../../../data/meals';
import DropDownMeals from './DropDownMeals';

class MealInput extends React.Component {
	constructor() {
		super()
		this.state = {
			meals: meals,
			inputfield: '',
			dropDown: false  
		}
	}

	dropDownMeals = (event) => {
		this.setState({ inputfield: event.target.value }, () => {
			(this.state.inputfield === '') ? this.setState({ dropDown: false }) : this.setState({ dropDown: true });
		});
	}

	selectMeal = (selectedMeal) => {
    this.setState({ inputfield: selectedMeal });
    this.setState({ dropDown: false });
    const day = this.props.day;
    this.props.callbackFromCalendar(selectedMeal, day);
    }

	render() {
		const mealNames = this.state.meals.map( x => x.mealName.toLowerCase() );
		const filteredMeals = mealNames.filter( x => x.includes(this.state.inputfield) );

		return (
			<div >
				<textarea
					value={this.state.inputfield}
					type="text"
					placeholder="Meal name" 
					onChange={this.dropDownMeals}
				></textarea>
				{ 
					(this.state.dropDown) 
					? <DropDownMeals 
							filteredMeals={ filteredMeals } 
							callbackFromMealInput={this.selectMeal}
						/> 
					: null 
				}
			</div>
		);
	}
}

export default MealInput;