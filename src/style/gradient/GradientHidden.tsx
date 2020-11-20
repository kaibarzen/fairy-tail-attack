import React from 'react';
import {Hidden} from '../index';

const GradientHidden = (props: Hidden) =>
{
	return (
		<div className={"card hidden color"}>
			<div className={"content"}>
				<div className={"color text textclip"}>
					?
				</div>
			</div>
		</div>
	);
};

export default GradientHidden;