import React from 'react';
import './gradient.sass';
import {Wrapper} from '../../decks';

const GradientWrapper = (props: Wrapper) =>
{

	return (
		<div className={"gradient"}>
			{props.children}
		</div>
	);
};

export default GradientWrapper;