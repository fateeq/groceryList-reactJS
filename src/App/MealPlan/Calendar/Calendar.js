import React from 'react';
import IngredientInput from './IngredientInput';

const Calendar = () => {
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
					<td><textarea placeholder="Meal name" maxLength="40"></textarea></td>
					<td><textarea placeholder="Meal name" maxLength="40"></textarea></td>
					<td><textarea placeholder="Meal name" maxLength="40"></textarea></td>
					<td><textarea placeholder="Meal name" maxLength="40"></textarea></td>
					<td><textarea placeholder="Meal name" maxLength="40"></textarea></td>
					<td><textarea placeholder="Meal name" maxLength="40"></textarea></td>
					<td><textarea placeholder="Meal name" maxLength="40"></textarea></td>
				</tr>
				<tr className="row3">
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

export default Calendar;