import React from 'react';
import {getCard, getDeck} from '../decks';
import Wrapper from './Wrapper';

interface SheetProps
{
	match: {
		params: {
			deck: string,
			name: string,
			n: any,
		}
	}
}

const Sheet = (props: SheetProps) =>
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

	if (isNaN(props.match.params.n) && props.match.params.n > 0)
	{
		return (
			<div>
				/:deck/:name/sheet/:n , n is not numeric or must be larger then 0
			</div>
		);
	}

	let allCards: object[] = [];

	card.props.map((card) =>
	{
		if (!card.amount)
		{
			allCards.push(card);
			return null;
		}

		for (let i = 0; i < card.amount; i++)
		{
			allCards.push(card);
		}
		return null;
	});

	const sheetCount = deck.x * deck.y; // How Many cards on a single sheet
	const sheetCards = allCards.splice((props.match.params.n - 1) * (sheetCount - 1), props.match.params.n * (sheetCount - 1)); // Select first n cards

	let out = [];

	for (let i = 0; i < sheetCount; i++)
	{
		const x = (i % deck.x) * deck.width;
		const y = Math.floor(i / deck.x) * deck.height;

		if (i === (sheetCount - 1)) // Last pos is always the hidden card
		{
			out.push(
				<div style={{position: 'absolute', top: y, left: x, width: deck.width, height: deck.height}}>
					<card.hidden.card
						width={deck.width}
						height={deck.height}
						{...card.hidden.props}
					/>
				</div>,
			);
		}
		else if (sheetCards[i]) // Push the normal cards
		{
			out.push(
				<div style={{position: 'absolute', top: y, left: x, width: deck.width, height: deck.height}}>
					{/* @ts-ignore */}
					<card.card
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
					<card.card
						width={deck.width}
						height={deck.height}
						{...{title: 'DISCARD THIS', text: 'This is an filler card, discard it and draw another.'}}
					/>
				</div>,
			);
		}

	}

	return (
		<Wrapper card={card}>
			{out}
		</Wrapper>
	);
};

export default Sheet;