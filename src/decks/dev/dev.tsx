import {Deck} from '../index';
import gradient from '../../style/gradient/gradient';
import {ActionColor, Type} from '../types';
import React from 'react';

const devDeck: Deck = {
	name: 'dev',
	width: 300,
	height: 450,
	x: 10,
	y: 7,
	style: gradient,

	

	action: [
		{
			amount: 1,
			title: 'Dragonlore',
			text: 'Gain +4 Reach',
			image: 'https://gamebanana.com/skins/embeddables/141594?type=sd_image',
			type: Type.WEAPON,
			color: ActionColor.GRAY
		},
		{
			amount: 1,
			title: 'Dragonlore',
			text: 'Gain +4 Reach',
			image: 'https://gamebanana.com/skins/embeddables/141594?type=sd_image',
			type: Type.VEHICLE,
			color: ActionColor.GREEN
		}
	],
	character: [],
	role: []
};

export default devDeck;