import React from 'react';
import MealInput from './MealInput';
import IngredientInput from './IngredientInput';
import {meals} from '../../../data/meals.js';

class Calendar extends React.Component {
	constructor() {
		super()
		this.state = {
			meals: meals,
			newArray: [],
			MondayIng: []
		}
	}

  getIngredients = (selectedMeal, day) => {
  	const mealNames = this.state.meals.map( x => x.mealName.toLowerCase() );
  	const mealIndex = mealNames.indexOf(selectedMeal);
  	
  	const ingredients = Object.values(this.state.meals[mealIndex]).slice(3);
  	const newObject = {};
  	newObject[day] = ingredients;
  	this.state.newArray.push(newObject);
  	
  	const selectedDays = (this.state.newArray).map(x => Object.keys(x).join());
  	const MondayIng = (selectedDays.includes("Monday")) ? ((this.state.newArray.filter(x => x.Monday))[0].Monday) : [];
  	this.setState({ MondayIng:MondayIng });
  }

	render() {
		return (
			<table id="calendar_wk1" className="calendar">
				<thead>
					<tr className="row1">
						<th>Monday</th>
						<th>Tuesday</th>
						<th>Wednesday</th>
						<th>Thursday</th>
						<th>Friday</th>
						<th>Saturday</th>
						<th>Sunday</th>
					</tr>
				</thead>	
				<tbody>
					<tr className="row2">
						<td><MealInput callbackFromCalendar={this.getIngredients} day="Monday"/></td>
						<td><MealInput callbackFromCalendar={this.getIngredients} day="Tuesday"/></td>
						<td><MealInput callbackFromCalendar={this.getIngredients} day="Wednesday"/></td>
						<td><MealInput callbackFromCalendar={this.getIngredients} day="Thursday"/></td>
						<td><MealInput callbackFromCalendar={this.getIngredients} day="Friday"/></td>
						<td><MealInput callbackFromCalendar={this.getIngredients} day="Saturday"/></td>
						<td><MealInput callbackFromCalendar={this.getIngredients} day="Sunday"/></td>
					</tr>
					<tr className="row3">
						{console.log('MondayIng=',this.state.MondayIng)}
						<td>
							<IngredientInput day="Monday" value={this.state.MondayIng[0]}/>
							<IngredientInput day="Monday" value={this.state.MondayIng[1]}/>
							<IngredientInput day="Monday" value={this.state.MondayIng[2]}/>
							<IngredientInput day="Monday" value={this.state.MondayIng[3]}/>
							<IngredientInput day="Monday" value={this.state.MondayIng[4]}/>
							<IngredientInput day="Monday" value={this.state.MondayIng[5]}/>
							<IngredientInput day="Monday" value={this.state.MondayIng[6]}/>
							<IngredientInput day="Monday" value={this.state.MondayIng[7]}/>
						</td>
						<td>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
						</td>
						<td>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
						</td>
						<td>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
						</td>
						<td>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
						</td>
						<td>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
						</td>
						<td>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
							<IngredientInput/>
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default Calendar;