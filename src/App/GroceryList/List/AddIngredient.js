import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faPlus);

const AddIngredient = () => {
	return (
		<div className="addIngredientBtn">
			<FontAwesomeIcon icon="plus" size="xs"/> Ingredient
		</div>
	);
}

export default AddIngredient;