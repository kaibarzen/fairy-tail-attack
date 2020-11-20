import React from 'react';
import {getDeck} from '../decks';
import Wrapper from './Wrapper';

interface HiddenProps
{
	match: any, // React Router
}

const Hidden = (props: HiddenProps) =>
{
	const deck = getDeck(props.match.params.deck);
	if (!deck)
	{
		return (
			<div>
				Deck not Found
			</div>
		);
	}

	return (
		<Wrapper deck={deck}>
			<div style={{width: deck.width, height: deck.height}}>
				<deck.style.hidden/>
			</div>
		</Wrapper>
	);
};

export default Hidden;