import React from 'react';
import {ActionCard, CharacterCard, getDeck, getType, RoleCard} from '../decks';
import Wrapper from './Wrapper';

interface SheetProps
{
	match: {
		params: {
			deck: string,
			type: string,
			n: any,
		}
	}
}

const Sheet = (props: SheetProps) =>
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

	if (isNaN(props.match.params.n) && props.match.params.n > 0)
	{
		return (
			<div>
				/:deck/:type/sheet/:n , n is not numeric or must be larger then 0
			</div>
		);
	}

	const cards = deck[type];
	let allCards: object[] = [];


	// @ts-ignore
	cards.map((card: CharacterCard | ActionCard | RoleCard) =>
	{
		if (!card.amount || isNaN(card.amount))
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
	const sheetCards = allCards.splice((props.match.params.n - 1) * (sheetCount -1), props.match.params.n * (sheetCount -1));

	let out = [];

	for (let i = 0; i < sheetCount; i++)
	{
		const x = (i % deck.x) * deck.width;
		const y = Math.floor(i / deck.x) * deck.height;

		if (i === (sheetCount -1)) // Last pos is always the hidden card
		{
			out.push(
				<Wrapper deck={deck}>
					<div style={{position: 'absolute', top: y, left: x, width: deck.width, height: deck.height}}>
						<style.hidden
							width={deck.width}
							height={deck.height}
						/>
					</div>
				</Wrapper>,
			);
		}
		else if (sheetCards[i]) // Push the normal cards
		{
			out.push(
				<Wrapper deck={deck}>
					<div style={{position: 'absolute', top: y, left: x, width: deck.width, height: deck.height}}>
						{/* @ts-ignore */}
						<style.card
							width={deck.width}
							height={deck.height}
							{...sheetCards[i]}
						/>
					</div>
				</Wrapper>,
			);
		}
		else // Fill the rest of the sheets with filler cards
		{
			out.push(
				<Wrapper deck={deck}>
					<div style={{position: 'absolute', top: y, left: x, width: deck.width, height: deck.height}}>
						<style.card
							width={deck.width}
							height={deck.height}
							title={'DISCARD THIS'}
							text={'This is an filler card, discard it and draw another.'}
						/>
					</div>
				</Wrapper>,
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