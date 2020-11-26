import React, {ReactNode} from 'react';
import devDeck from './dev/dev';
import ftaDeck from './fta/fta';

export const register: Deck[] = [devDeck, ftaDeck];

export const getDeck = (strg: string) =>
{
	return register.find((item) =>
	{
		return item.name.toLowerCase() === strg.toLowerCase();
	});
};

export const getCard = (strg: string, deck: Deck) =>
{
	return deck.cards.find((item) =>
	{
		return item.name.toLowerCase() === strg.toLowerCase();
	});
};

export interface Deck
{
	name: string, // Name for the browser
	width: number, // Width of a single card in px
	height: number, // height of a single card in px
	x: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10, // How many cards in the x and y axis
	y: 2 | 3 | 4 | 5 | 6 | 7, // Use this if chrome doesnt render extremely large images
	cards: Card[]
}

export interface Card
{
	name: string,
	backside: SpecialCard,
	hidden: SpecialCard,
	card: React.ComponentType<CardProps>,
	props: CardProp[]
	wrapper?: React.ComponentType<{ children: ReactNode }>
}

export interface CardProps
{
	width: number,
	height: number
}

export interface SpecialCard
{
	props: object,  // ALl Props get then passed to the component
	card: React.ComponentType<CardProps>
}
export interface CardProp
{
	amount?: number,
	[key: string]: any // ALl Props get then passed to the component
}

export interface Wrapper
{
	children: ReactNode
}

