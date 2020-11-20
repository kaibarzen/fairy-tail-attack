import {Style} from '../style';
import devDeck from './dev/dev';
import {Color, Type} from './types';

export const register: Deck[] = [devDeck];

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
	title: string,
	text: string,
	amount?: number,
	image?: string,
	color?: Color,
	type?: Type,
}
