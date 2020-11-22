import React from 'react';
import {ActionCardStyle} from '../index';
import {ActionColor, Type} from '../../decks/types';

const GradientCard = (props: ActionCardStyle) =>
{
	props = {color: ActionColor.RED, type: Type.ACTION, ...props};

	if (props.type === undefined)
	{
		//Thanks typescript
		props.type = Type.ACTION;
	}

	return (
		<div
			className={`action card ${props.color}`}
		>
			<div
				className={'content'}
				style={{
					margin: props.width * 0.027,
				}}
			>
				<div
					className={'background'}
					style={{
						width: props.width * 0.946,
						height: props.height * 0.946,
					}}
				>
					<img src={props.image} alt={""}/>
				</div>

				<div
					className={'foreground'}
				>
					<div
						style={{
							fontSize: props.width * 0.08,
							letterSpacing: props.width * 0.02,
							backgroundColor: '#0f0f0f',
							width: 'available',
							padding: props.width * 0.03,
							paddingLeft: props.width * 0.06,
							borderRadius: '16px 16px 0 0',
						}}
					>
						<div className={'right'}>
							{/*// textclip class just doesnt fucking work... also background filter in two classes or weird effects appear*/}
							{props.title}
						</div>
					</div>

					<div
						style={{
							backgroundImage: `url("${props.image}")`,
							height: props.height * 0.35,
							maxWidth: '100%',
							backgroundSize: 'cover',
						}}
					/>

					<div
						className={'text right'}
						style={{
							fontSize: props.width * 0.06,
							margin: props.width * 0.06,
							marginRight: props.width * 0.18,
						}}
					>
						{props.text}
					</div>

					<div
						className={'meta clip bottom'}
						style={{
							fontSize: props.height * 0.045,
							letterSpacing: props.height * 0.022,
							margin: props.width * 0.04,
						}}
					>
						{props.type} {props.color}
					</div>
				</div>

			</div>
		</div>
	);
};

GradientCard.defaultProps = {
	image: '',
};

export default GradientCard;