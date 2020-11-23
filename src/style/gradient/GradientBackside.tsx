import React from 'react';
import {CardProps} from '../../decks';

interface Props extends CardProps
{
	title?: string,
	text?: string,
}

const GradientBackside = (props: Props) =>
{
	props = {title: 'ACTION', text: 'FTA ACTION CARD', ...props};

	return (
		<div className={'card backside color'}>
			<div
				className={'content'}
				style={{
					margin: props.width * 0.027,
				}}
			>
				<div
					className={'color textclip'}
					style={{
						fontSize: props.width * 0.066666,
						letterSpacing: props.width * 0.0366,
						marginBottom: props.height * 0.071,
						marginTop: 'auto',
						width: 'min-content',
					}}
				>
					{props.text}
				</div>
				<div
					className={'title color textclip'}
					style={{
						fontSize: props.height * 0.182,
						letterSpacing: props.height * 0.05,
					}}
				>
					{props.title}
				</div>
			</div>
		</div>
	);
};

export default GradientBackside;