import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCaretDown);

const ShowAllIngredients = () => {
	return (
		<div id="ingredientSuggestions" className="showSuggestionsBtn">
			<FontAwesomeIcon icon="caret-down" /> Show suggestions for all categories
		</div>
	);
}

export default ShowAllIngredients;