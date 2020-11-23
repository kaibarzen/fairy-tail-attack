import React from 'react';
import {getCard, getDeck} from '../decks';
import Wrapper from './Wrapper';

interface Props
{
	match: {
		params: {
			deck: string,
			name: string,
		}
	}
}

const Hidden = (props: Props) =>
{
	const deck = getDeck(props.match.params.deck);
	if (!deck)
	{
		return (
			<div>
				Deck not found
			</div>
		);
	}

	const card = getCard(props.match.params.name, deck);
	if (!card)
	{
		return (
			<div>
				Card not found
			</div>
		);
	}

	return (
		<Wrapper card={card}>
			<div style={{width: deck.width, height: deck.height, position: 'absolute'}}>
				<card.hidden.card
					width={deck.width}
					height={deck.height}
					{...card.backside.props}
				/>
			</div>
		</Wrapper>
	);
};

export default Hidden;