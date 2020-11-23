import React from 'react';
import {Deck} from '../index';
import {Color, Type} from '../../style/gradient/types';
import GradientBackside from '../../style/gradient/GradientBackside';
import GradientHidden from '../../style/gradient/GradientHidden';
import GradientCard from '../../style/gradient/GradientCard';
import GradientWrapper from '../../style/gradient/GradientWrapper';
import GradientRole from '../../style/gradient/GradientRole';
import GradientCharacter from '../../style/gradient/GradientCharacter';

const devDeck: Deck = {
	name: 'dev',
	width: 300,
	height: 450,
	x: 10,
	y: 7,

	cards: [
		{
			name: 'action',
			wrapper: GradientWrapper,
			backside: {
				card: GradientBackside,
				props: {},
			},
			hidden: {
				card: GradientHidden,
				props: {},
			},
			card: GradientCard,
			props: [
				{
					amount: 1,
					title: 'Dragonlore',
					text: 'Gain +4 Reach',
					image: 'https://gamebanana.com/skins/embeddables/141594?type=sd_image',
					type: Type.WEAPON,
					color: Color.GRAY,
				},
				{
					amount: 1,
					title: 'Dragonlore',
					text: 'Gain +4 Reach',
					image: 'https://gamebanana.com/skins/embeddables/141594?type=sd_image',
					type: Type.VEHICLE,
					color: Color.GREEN,
				},
			],
		},
		{
			name: 'character',
			wrapper: GradientWrapper,
			card: GradientCharacter,
			backside: {
				card: GradientBackside,
				props: {
					title: "CHAR",
					text: "FTA CHAR- ACTER CARD",
				},
			},
			hidden: {
				card: GradientHidden,
				props: {},
			},
			props: [
				{
					title: "Mimic",
					text: "Steal an ability from a player you choose",
					health: 8,
					shield: 3,
					image: "https://i.imgur.com/pMRSJyh.png"
				},
			],
		},
	],
};

export default devDeck;