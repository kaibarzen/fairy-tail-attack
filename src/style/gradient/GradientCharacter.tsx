import React from 'react';
import {CardProps} from '../../decks';
import {Color} from './types';
import Hp from '../../components/icons/Hp';
import Shield from '../../components/icons/Shield';

interface Props extends CardProps
{
	title?: string,
	text?: string,
	health?: number,
	shield?: number,
	color?: Color,
	image?: string,
}

const GradientCharacter = (props: Props) =>
{
	props = {color: Color.RED, health: 0, shield: 0, ...props};

	return (
		<div className={`character card ${props.color}`}>
			<div
				className={'content'}
				style={{
					margin: props.width * 0.027,
				}}
			>
				<div
					className={'title'}
					style={{
						fontSize: props.width * 0.09,
						letterSpacing: props.width * 0.02,
						padding: props.width * 0.03,
						paddingLeft: props.width * 0.06,
						borderRadius: '16px 16px 0 0',
					}}
				>
					<div className={'right'}>
						{props.title}
					</div>
				</div>

				<div className={'image'}>
					<div
						className={'stats'}
						style={{
							fontSize: props.width * 0.12,
							maxWidth: props.width * 0.24,
							padding: props.width * 0.02,
							marginRight: props.width * 0.002
						}}
					>
						<Hp> {props.health} </Hp>
						<Shield> {props.shield} </Shield>
					</div>
					<img
						src={props.image}
						alt={''}
					/>
				</div>

				<div
					className={'text right'}
					style={{
						fontSize: props.width * 0.07,
						margin: props.width * 0.08,
					}}
				>
					{props.text}
				</div>
			</div>
		</div>
	);
};

export default GradientCharacter;