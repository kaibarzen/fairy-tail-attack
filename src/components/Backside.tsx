import React from 'react';
import {getDeck} from '../decks';
import Wrapper from './Wrapper';

interface BacksideProps
{
	match: any, // React Router
}

const Backside = (props: BacksideProps) =>
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
			<div style={{width: deck.width, height: deck.height, position: 'absolute'}}>
				<deck.style.backside width={deck.width} height={deck.height}/>
			</div>
		</Wrapper>
	);
};

export default Backside;