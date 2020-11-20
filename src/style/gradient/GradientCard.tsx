import React from 'react';
import {Card} from '../index';
import {Color, Type} from '../../decks/types';

const GradientCard = (props: Card) =>
{
	props = {color: Color.RED, type: Type.ACTION, ...props};

	return (
		<div className={`action card ${props.color}`}>
			<div
				className={'content'}
				style={{backgroundImage: `url("${props.image}")`}}
			>

				<div className={'foreground'}>
					<div className={'title'}>
						<div className={'right'}>
							{/*// textclip class just doesnt fucking work... also background filter in two classes or weird effects appear*/}
							{props.title}
						</div>
					</div>

					<div className={'image'} style={{backgroundImage: `url("${props.image}")`}} />

					<div className={'text right'}>
						{props.text}
					</div>

					<div className={"meta bottom"}>
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