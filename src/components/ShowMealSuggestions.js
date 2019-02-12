import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
library.add(faCaretDown);

const ShowMealSuggestions = () => {
	return (
		<div id="showMealSuggestionsBtn">
			<FontAwesomeIcon icon="caret-down" /> Show meal suggestions
		</div>
	);
}

export default ShowMealSuggestions;