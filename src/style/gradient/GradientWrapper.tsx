import React from 'react';
import {Wrapper} from '../index';
import './gradient.sass';

const GradientWrapper = (props: Wrapper) =>
{

	return (
		<div className={"gradient"}>
			{props.children}
		</div>
	);
};

export default GradientWrapper;