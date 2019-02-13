import React from 'react';
import ShowIngredientSuggestions from './ShowIngredientSuggestions';
import AddIngredient from './AddIngredient';
import AddQty from './AddQty';
import RmvQty from './RmvQty';

const List = () => {
	return (
		<table id="groceryList">
			<tr className="row1">
				<th> Protein
					<ShowIngredientSuggestions/>
				</th>
				<th> Fruits & Vegetables
					<ShowIngredientSuggestions/>
				</th>
				<th> Other Food
					<ShowIngredientSuggestions/>
				</th>
				<th> Non-Food
					<ShowIngredientSuggestions/>
				</th>
			</tr>
			<tr className="row2">
				<td id="meatProtein">
					<div className="item flex-container">
						<div>Chicken</div>
						<div className="icons">	
							<AddQty/>
							<RmvQty/>
						</div>
					</div>
					<AddIngredient/>
				</td>
				<td id="fruitsVegetables">
					<div className="item flex-container">
						<div>Mushrooms</div>
						<div className="icons">	
							<AddQty/>
							<RmvQty/>
						</div>
					</div>
					<div className="item flex-container">
						<div>Red Pepper</div>
						<div className="icons">	
							<AddQty/>
							<RmvQty/>
						</div>
					</div>
					<div className="item flex-container">
						<div>Snap Peas</div>
						<div className="icons">	
							<AddQty/>
							<RmvQty/>
						</div>
					</div>
					<AddIngredient/>
				</td>
				<td id="otherFood">
					<div className="item flex-container">
						<div>Szechuan Sauce</div>
						<div className="icons">	
							<AddQty/>
							<RmvQty/>
						</div>
					</div>
					<div className="item flex-container">
						<div>Noodles</div>
						<div className="icons">	
							<AddQty/>
							<RmvQty/>
						</div>
					</div>
					<AddIngredient/>
				</td>
				<td id="nonFood">
					<div className="item flex-container">
						<div>Dishwashing Liquid x 2</div>
						<div className="icons">	
							<AddQty/>
							<RmvQty/>
						</div>
					</div>
					<AddIngredient/>
				</td>
			</tr>
		</table>
	);
}

export default List;