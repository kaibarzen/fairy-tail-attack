import React from 'react';
import {Wrapper} from '../index';
import './gradient.css';

const GradientWrapper = (props: Wrapper) =>
{

	// Create context etc for icon styling?

	return (
		<div className={"gradient"}>
			{props.children}
		</div>
	);
};

export default GradientWrapper;