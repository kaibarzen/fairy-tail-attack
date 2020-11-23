import React from 'react';
import {getDeck, getType} from '../decks';
import Wrapper from './Wrapper';

interface HiddenProps
{
	match: {
		params: {
			deck: string,
			type: string,
		}
	}
}

const Hidden = (props: HiddenProps) =>
{
	const deck = getDeck(props.match.params.deck);
	const type = getType(props.match.params.type);

	if (!deck || !type)
	{
		return (
			<div>
				Deck | Type not found
			</div>
		);
	}

	const style = deck.style[type];

	if (!style)
	{
		return (
			<div>
				Style type not found
			</div>
		);
	}

	return (
		<Wrapper deck={deck}>
			<div style={{width: deck.width, height: deck.height, position: 'absolute'}}>
				<style.hidden
					width={deck.width}
					height={deck.height}
				/>
			</div>
		</Wrapper>
	);
};

export default Hidden;