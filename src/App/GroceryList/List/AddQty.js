import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faPlusCircle);

const AddQty = () => {
	return (
		<span className="plusBtn">
			<FontAwesomeIcon icon="plus-circle" size="xs"/>
		</span>
	);
}

export default AddQty;