import React from 'react';
import {CardProps} from '../../decks';
import {Color} from './types';

interface Props extends CardProps
{
	color?: Color
	name?: string,
	text?: string
}

const GradientRole = (props: Props) =>
{
	props = {color: Color.GREEN, ...props};

	return (
		<div className={`card role ${props.color}`}>
			<div
				className={'content'}
				style={{
					margin: props.width * 0.027,
				}}
			>
				<div
					className={'right text'}
					style={{
						fontSize: props.width * 0.06,
						letterSpacing: props.width * 0.022,
						marginBottom: props.height * 0.071,
						marginTop: 'auto',
						width: 'min-content',
						minWidth: '55%',
					}}
				>
					{props.text}
				</div>
				<div
					className={'vertical bottom title'}
					style={{
						fontSize: props.height * 0.180,
						letterSpacing: props.height * 0.02,
					}}
				>
					{
						(props.name || props.color)?.split("").map((char) =>
						{
							return <div className={"vertical text"}> {char} </div>
						})
					}
				</div>
			</div>
		</div>
	);
};

export default GradientRole;