import React from 'react';
import MealPlan from './MealPlan';
import GroceryList from './GroceryList';
import CostEstimates from './CostEstimates';

const App = () => {
  return (
		<div>	  
		  <h2 className="ma0 pa2 bg-black white">Grocery List Manager</h2>
		  <MealPlan/>
		  <GroceryList/>
		  <CostEstimates/>
		  <h6 className="tc pa2 bg-black white">Copyright &copy; Farah Ateeq 2019</h6>
		</div>
	);
}

export default App;
