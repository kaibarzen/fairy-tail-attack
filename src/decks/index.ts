import {Style} from '../style';
import {Color, Type} from './types';
import ftaDeck from './fta/fta';
import {ReactNode} from 'react';
import devDeck from './dev/dev';

export const register: Deck[] = [devDeck, ftaDeck];

export const getDeck = (strg: string) =>
{
	return register.find((item) =>
	{
		return item.name.toLowerCase() === strg.toLowerCase();
	});
};

export interface Deck
{
	name: string, // Name for the browser
	width: number, // Width of a single card in px
	height: number, // height of a single card in px
	style: Style, // Style template, card template
	x: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10, // How many cards in the x and y axis
	y: 2 | 3 | 4 | 5 | 6 | 7, // Use this if chrome doesnt render extremely large images
	cards: Card[]
}

export interface Card
{
	title: ReactNode,
	text: ReactNode,
	amount?: number,
	image?: string,
	color?: Color,
	type?: Type,
}
