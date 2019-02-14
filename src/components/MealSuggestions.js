import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MealsList from './MealsList';
import { meals } from '../data/meals.js';

class MealSuggestions extends Component {
	constructor() {
		super()
		this.state = {
			meals: meals,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredMeals = this.state.meals.filter(x => {
			return x.mealName.toLowerCase().includes( this.state.searchfield.toLowerCase() )
		})

		return (
			<div id="mealSuggestions">
				<SearchBar searchChange={ this.onSearchChange }/>
				<MealsList meals={ filteredMeals }/>
			</div>
		);
	}
}

export default MealSuggestions;