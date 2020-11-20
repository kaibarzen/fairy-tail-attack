import React from 'react';
import {Card, getDeck} from '../decks';

interface SheetProps
{
	match: any, // React Router
}

const Sheet = (props: SheetProps) =>
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

	if (isNaN(props.match.params.n) && props.match.params.n > 0)
	{
		return (
			<div>
				/:deck/sheet/:n , n is not numeric or must be larger then 0
			</div>
		);
	}

	let allCards: Card[] = [];

	deck.cards.map((card) =>
	{
		if (!card.amount || isNaN(card.amount))
		{
			allCards.push(card);
			return;
		}

		for (let i = 0; i < card.amount; i++)
		{
			allCards.push(card);
		}
	});

	const sheetCards = allCards.splice((props.match.params.n - 1) * 69, props.match.params.n * 69);

	let out = [];

	for (let i = 0; i < 70; i++)
	{
		const x = (i % 10) * deck.width;
		const y = Math.floor(i / 10) * deck.height;

		if (i === 69) // Last pos is always the hidden card
		{
			out.push(
				<div style={{position: 'absolute', top: y, left: x, width: deck.width, height: deck.height}}>
					<deck.style.hidden
						width={deck.width}
						height={deck.height}
					/>
				</div>,
			);
		}
		else if (sheetCards[i]) // Push the normal cards
		{
			out.push(
				<div style={{position: 'absolute', top: y, left: x, width: deck.width, height: deck.height}}>
					<deck.style.card
						width={deck.width}
						height={deck.height}
						{...sheetCards[i]}
					/>
				</div>,
			);
		}
		else // Fill the rest of the sheets with filler cards
		{
			out.push(
				<div style={{position: 'absolute', top: y, left: x, width: deck.width, height: deck.height}}>
					<deck.style.card
						width={deck.width}
						height={deck.height}
						title={'DISCARD THIS'}
						text={'This is an filler card, discard it and draw another.'}
					/>
				</div>,
			);
		}

	}

	return (
		<div>
			{out}
		</div>
	);
};

export default Sheet;