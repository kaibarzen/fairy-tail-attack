import {Style} from '../style';
import {ActionColor, RoleColor, Type} from './types';
import {ReactNode} from 'react';
import devDeck from './dev/dev';

export const register: Deck[] = [devDeck];

export const getDeck = (strg: string) =>
{
	return register.find((item) =>
	{
		return item.name.toLowerCase() === strg.toLowerCase();
	});
};

export const getType = (strg: string) =>
{
	switch (strg.toLowerCase())
	{
		case 'action':
			return 'action';
		case 'character':
			return 'character';
		case 'role':
			return 'role';
		default:
			return null;
	}
};

export interface Deck
{
	name: string, // Name for the browser
	width: number, // Width of a single card in px
	height: number, // height of a single card in px
	style: Style, // Style template, card template // Style to array to implement multiple decks
	x: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10, // How many cards in the x and y axis
	y: 2 | 3 | 4 | 5 | 6 | 7, // Use this if chrome doesnt render extremely large images
	action: ActionCard[],
	character: CharacterCard[],
	role: RoleCard[]
}

export interface ActionCard
{
	title: ReactNode,
	text: ReactNode,
	amount?: number,
	image?: string,
	color?: ActionColor,
	type?: Type,
}

export interface CharacterCard
{
	title: ReactNode,
	text: ReactNode,
	image?: string,
	color?: string,
	amount?: number,
}

export interface RoleCard
{
	title: string,
	color?: RoleColor,
	image?: string,
	amount?: number,
}


