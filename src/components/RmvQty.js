import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faMinusCircle);

const RmvQty = () => {
	return (
		<span className="minusBtn">
			<FontAwesomeIcon icon="minus-circle" size="xs"/>
		</span>
	);
}

export default RmvQty;