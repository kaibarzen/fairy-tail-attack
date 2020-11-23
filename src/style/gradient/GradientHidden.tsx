import React from 'react';
import {CardProps} from '../../decks';

const GradientHidden = (props: CardProps) =>
{
	return (
		<div className={'card hidden color'}>
			<div
				className={'content'}
				style={{
					margin: props.width * 0.027,
				}}
			>
				<div
					className={'color textclip'}
					style={{
						fontSize: props.height * 0.9,
					}}
				>
					?
				</div>
			</div>
		</div>
	);
};

export default GradientHidden;