import React from 'react';
import MealInput from './MealInput';
import IngredientInput from './IngredientInput';
import {meals} from '../../../data/meals.js';

class Calendar extends React.Component {
	constructor() {
		super()
		this.state = {
			meals: meals,
			Monday: {meal: '', ingredients: []},
			Tuesday: {meal: '', ingredients: []},
			Wednesday: {meal: '', ingredients: []},
			Thursday: {meal: '', ingredients: []},
			Friday: {meal: '', ingredients: []},
			Saturday: {meal: '', ingredients: []},
			Sunday: {meal: '', ingredients: []}
		}
	}

  getIngredients = (selectedMeal, day) => {  	
  	const mealNames = this.state.meals.map( x => x.mealName.toLowerCase() );
  	const mealIndex = mealNames.indexOf(selectedMeal);
  	const ingredients = Object.values(this.state.meals[mealIndex]).slice(3); 
  	
  	if (day==='Monday') {
  		this.state.Monday.meal = selectedMeal; this.forceUpdate();
  		this.state.Monday.ingredients = ingredients; this.forceUpdate();
  	} else if (day==='Tuesday') {
  		this.state.Tuesday.meal = selectedMeal; this.forceUpdate();
  		this.state.Tuesday.ingredients = ingredients; this.forceUpdate();
  	} else if (day==='Wednesday') {
  		this.state.Wednesday.meal = selectedMeal; this.forceUpdate();
  		this.state.Wednesday.ingredients = ingredients; this.forceUpdate();
  	} else if (day==='Thursday') {
  		this.state.Thursday.meal = selectedMeal; this.forceUpdate();
  		this.state.Thursday.ingredients = ingredients; this.forceUpdate();
  	} else if (day==='Friday') {
  		this.state.Friday.meal = selectedMeal; this.forceUpdate();
  		this.state.Friday.ingredients = ingredients; this.forceUpdate();
  	} else if (day==='Saturday') {
  		this.state.Saturday.meal = selectedMeal; this.forceUpdate();
  		this.state.Saturday.ingredients = ingredients; this.forceUpdate();
  	} else if (day==='Sunday') {
  		this.state.Sunday.meal = selectedMeal; this.forceUpdate();
  		this.state.Sunday.ingredients = ingredients; this.forceUpdate();
  	}  	
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
						<td>
							<IngredientInput day="Monday" value={this.state.Monday.ingredients[0]}/>
							<IngredientInput day="Monday" value={this.state.Monday.ingredients[1]}/>
							<IngredientInput day="Monday" value={this.state.Monday.ingredients[2]}/>
							<IngredientInput day="Monday" value={this.state.Monday.ingredients[3]}/>
							<IngredientInput day="Monday" value={this.state.Monday.ingredients[4]}/>
							<IngredientInput day="Monday" value={this.state.Monday.ingredients[5]}/>
							<IngredientInput day="Monday" value={this.state.Monday.ingredients[6]}/>
							<IngredientInput day="Monday" value={this.state.Monday.ingredients[7]}/>
						</td>
						<td>
							<IngredientInput day="Tuesday" value={this.state.Tuesday.ingredients[0]}/>
							<IngredientInput day="Tuesday" value={this.state.Tuesday.ingredients[1]}/>
							<IngredientInput day="Tuesday" value={this.state.Tuesday.ingredients[2]}/>
							<IngredientInput day="Tuesday" value={this.state.Tuesday.ingredients[3]}/>
							<IngredientInput day="Tuesday" value={this.state.Tuesday.ingredients[4]}/>
							<IngredientInput day="Tuesday" value={this.state.Tuesday.ingredients[5]}/>
							<IngredientInput day="Tuesday" value={this.state.Tuesday.ingredients[6]}/>
							<IngredientInput day="Tuesday" value={this.state.Tuesday.ingredients[7]}/>
						</td>
						<td>
							<IngredientInput day="Wednesday" value={this.state.Wednesday.ingredients[0]}/>
							<IngredientInput day="Wednesday" value={this.state.Wednesday.ingredients[1]}/>
							<IngredientInput day="Wednesday" value={this.state.Wednesday.ingredients[2]}/>
							<IngredientInput day="Wednesday" value={this.state.Wednesday.ingredients[3]}/>
							<IngredientInput day="Wednesday" value={this.state.Wednesday.ingredients[4]}/>
							<IngredientInput day="Wednesday" value={this.state.Wednesday.ingredients[5]}/>
							<IngredientInput day="Wednesday" value={this.state.Wednesday.ingredients[6]}/>
							<IngredientInput day="Wednesday" value={this.state.Wednesday.ingredients[7]}/>
						</td>
						<td>
							<IngredientInput day="Thursday" value={this.state.Thursday.ingredients[0]}/>
							<IngredientInput day="Thursday" value={this.state.Thursday.ingredients[1]}/>
							<IngredientInput day="Thursday" value={this.state.Thursday.ingredients[2]}/>
							<IngredientInput day="Thursday" value={this.state.Thursday.ingredients[3]}/>
							<IngredientInput day="Thursday" value={this.state.Thursday.ingredients[4]}/>
							<IngredientInput day="Thursday" value={this.state.Thursday.ingredients[5]}/>
							<IngredientInput day="Thursday" value={this.state.Thursday.ingredients[6]}/>
							<IngredientInput day="Thursday" value={this.state.Thursday.ingredients[7]}/>
						</td>
						<td>
							<IngredientInput day="Friday" value={this.state.Friday.ingredients[0]}/>
							<IngredientInput day="Friday" value={this.state.Friday.ingredients[1]}/>
							<IngredientInput day="Friday" value={this.state.Friday.ingredients[2]}/>
							<IngredientInput day="Friday" value={this.state.Friday.ingredients[3]}/>
							<IngredientInput day="Friday" value={this.state.Friday.ingredients[4]}/>
							<IngredientInput day="Friday" value={this.state.Friday.ingredients[5]}/>
							<IngredientInput day="Friday" value={this.state.Friday.ingredients[6]}/>
							<IngredientInput day="Friday" value={this.state.Friday.ingredients[7]}/>
						</td>
						<td>
							<IngredientInput day="Saturday" value={this.state.Saturday.ingredients[0]}/>
							<IngredientInput day="Saturday" value={this.state.Saturday.ingredients[1]}/>
							<IngredientInput day="Saturday" value={this.state.Saturday.ingredients[2]}/>
							<IngredientInput day="Saturday" value={this.state.Saturday.ingredients[3]}/>
							<IngredientInput day="Saturday" value={this.state.Saturday.ingredients[4]}/>
							<IngredientInput day="Saturday" value={this.state.Saturday.ingredients[5]}/>
							<IngredientInput day="Saturday" value={this.state.Saturday.ingredients[6]}/>
							<IngredientInput day="Saturday" value={this.state.Saturday.ingredients[7]}/>
						</td>
						<td>
							<IngredientInput day="Sunday" value={this.state.Sunday.ingredients[0]}/>
							<IngredientInput day="Sunday" value={this.state.Sunday.ingredients[1]}/>
							<IngredientInput day="Sunday" value={this.state.Sunday.ingredients[2]}/>
							<IngredientInput day="Sunday" value={this.state.Sunday.ingredients[3]}/>
							<IngredientInput day="Sunday" value={this.state.Sunday.ingredients[4]}/>
							<IngredientInput day="Sunday" value={this.state.Sunday.ingredients[5]}/>
							<IngredientInput day="Sunday" value={this.state.Sunday.ingredients[6]}/>
							<IngredientInput day="Sunday" value={this.state.Sunday.ingredients[7]}/>
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default Calendar;