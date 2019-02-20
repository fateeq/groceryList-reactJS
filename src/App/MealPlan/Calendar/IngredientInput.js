import React from 'react';
import { costs } from '../../../data/costs';
import DropDown from './DropDown';

class IngredientInput extends React.Component {
	constructor() {
		super();
		this.state = {
			costs: costs,
			inputfield: ''
		}
	}

	dropDown = (event) => {
		this.setState({ inputfield: event.target.value });
	}

	render() {
		const items = [...new Set(this.state.costs.map( x => x.item.toLowerCase() ))];
		const filteredItems = items.filter(x => x.includes(this.state.inputfield));

		return (
			<div>
				<input 
					type="text" 
					placeholder="Ingredient" 
					onChange={ this.dropDown }
				/>
				{ (this.state.inputfield !== '') ? <DropDown filteredItems={ filteredItems } /> : null }
			</div>
		);
	}
}

export default IngredientInput;