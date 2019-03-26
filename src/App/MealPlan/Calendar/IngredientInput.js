import React from 'react';
import { costs } from '../../../data/costs';
import DropDownIngredients from './DropDownIngredients';

class IngredientInput extends React.Component {
	constructor() {
		super();
		this.state = {
			costs: costs,
			inputfield: '',
		}
	}

	dropDownIngredients = (event) => {
		this.setState({ inputfield: event.target.value });
	}

	render() {
		const items = [...new Set(this.state.costs.map( x => x.item.toLowerCase() ))];
		const filteredItems = items.filter(x => x.includes(this.state.inputfield));

		return (
			<div>
				<input 
					value={this.props.value}
					type="text" 
					placeholder="Ingredient" 
					onChange={ this.dropDownIngredients }
				/>
				{ (this.state.inputfield !== '') ? <DropDownIngredients filteredItems={ filteredItems } /> : null }
			</div>
		);
	}
}

export default IngredientInput;