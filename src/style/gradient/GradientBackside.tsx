import React from 'react';
import {Backside} from '../index';

const GradientBackside = (props: Backside) =>
{
	return (
		<div className={'card backside color'}>
			<div className={'content'}>
				<div className={"text color textclip"}>
					{props.text}
				</div>
				<div className={"title color textclip"}>
					{props.title}
				</div>
			</div>
		</div>
	);
};

GradientBackside.defaultProps = {
	title: 'ACTION',
	text: 'FTA ACTION CARD',
};

export default GradientBackside;