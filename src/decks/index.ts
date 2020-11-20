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
	name: string,
	width: number,
	height: number,
	style: Style,
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
