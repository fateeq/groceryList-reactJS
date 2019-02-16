import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
library.add(faCaretUp);

const HideMealSuggestions = () => {
	return (
		<div>
			<FontAwesomeIcon icon="caret-up" /> Hide meal suggestions
		</div>
	);
}

export default HideMealSuggestions;