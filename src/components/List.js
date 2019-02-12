import React from 'react';

const List = () => {
	return (
		<table >
			<tr >
				<th> Meat/Protein
					<div className="showSuggestionsBtn">
						<span className="fas fa-caret-down"></span>
						Show suggestions
					</div>
				</th>
				<th> Fruits & Vegetables
					<div className="showSuggestionsBtn">
						<span className="fas fa-caret-down"></span>
						Show suggestions
					</div>
				</th>
				<th> Other Food
					<div className="showSuggestionsBtn">
						<span className="fas fa-caret-down"></span>
						Show suggestions
					</div>
				</th>
				<th> Non-Food
					<div className="showSuggestionsBtn">
						<span className="fas fa-caret-down"></span>
						Show suggestions
					</div>
				</th>
			</tr>
			<tr className="row2">
				<td id="meatProtein">
					<div className="item flex-container">
						<div>Chicken</div>
						<div className="icons">	
							<span className="fas fa-plus-circle plusBtn"></span>
							<span className="fas fa-minus-circle minusBtn"></span>
						</div>
					</div>
					<div className="addIngredientBtn">
						<span className="fas fa-plus"></span>
						Ingredient
					</div>
				</td>
				<td id="fruitsVegetables">
					<div className="item flex-container">
						<div>Mushrooms</div>
						<div className="icons">	
							<span className="fas fa-plus-circle plusBtn"></span>
							<span className="fas fa-minus-circle minusBtn"></span>
						</div>
					</div>
					<div className="item flex-container">
						<div>Red Pepper</div>
						<div className="icons">	
							<span className="fas fa-plus-circle plusBtn"></span>
							<span className="fas fa-minus-circle minusBtn"></span>
						</div>
					</div>
					<div className="item flex-container">
						<div>Snap Peas</div>
						<div className="icons">	
							<span className="fas fa-plus-circle plusBtn"></span>
							<span className="fas fa-minus-circle minusBtn"></span>
						</div>
					</div>
					<div className="addIngredientBtn">
						<span className="fas fa-plus"></span>
						Ingredient
					</div>
				</td>
				<td id="otherFood">
					<div className="item flex-container">
						<div>Szechuan Sauce</div>
						<div className="icons">	
							<span className="fas fa-plus-circle plusBtn"></span>
							<span className="fas fa-minus-circle minusBtn"></span>
						</div>
					</div>
					<div className="item flex-container">
						<div>Noodles</div>
						<div className="icons">	
							<span className="fas fa-plus-circle plusBtn"></span>
							<span className="fas fa-minus-circle minusBtn"></span>
						</div>
					</div>
					<div className="addIngredientBtn">
						<span className="fas fa-plus"></span>
						Ingredient
					</div>
				</td>
				<td id="nonFood">
					<div className="item flex-container">
						<div>Dishwashing Liquid x 2</div>
						<div className="icons">	
							<span className="fas fa-plus-circle plusBtn"></span>
							<span className="fas fa-minus-circle minusBtn"></span>
						</div>
					</div>
					<div className="addIngredientBtn">
						<span className="fas fa-plus"></span>
						Ingredient
					</div>
				</td>
			</tr>
		</table>
	);
}

export default List;