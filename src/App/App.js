import React from 'react';
import './App.css';
import MealPlan from './MealPlan/MealPlan';
import GroceryList from './GroceryList/GroceryList';
import CostEstimates from './CostEstimates/CostEstimates';

const App = () => {
  return (
		<div className="App">
		  <h2 className="ma0 pa2 bg-black white header">Grocery List Manager</h2>
		  <MealPlan/>
		  <GroceryList/>
		  <CostEstimates/>
		  <h6 className="tc pa2 bg-black white">Copyright &copy; Farah Ateeq 2019</h6>
		</div>
	);
}

export default App;