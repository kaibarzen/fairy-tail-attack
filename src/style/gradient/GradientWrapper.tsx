import React from 'react';
import {Wrapper} from '../index';

const GradientWrapper = (props: Wrapper) =>
{

	// Create context etc for icon styling?

	return (
		<div>
			{props.children}
		</div>
	);
};

export default GradientWrapper;