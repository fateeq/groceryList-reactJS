import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faPlusCircle);

const AddWeek = () => {
	return (
		<div id="addWeekBtn">
			<FontAwesomeIcon icon="plus-circle" /> Week
		</div>
	);
}

export default AddWeek;