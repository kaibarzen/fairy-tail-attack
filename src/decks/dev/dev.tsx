import React from 'react';
import {Deck} from '../index';
import {Color, Type} from '../../style/gradient/types';
import GradientBackside from '../../style/gradient/GradientBackside';
import GradientHidden from '../../style/gradient/GradientHidden';
import GradientCard from '../../style/gradient/GradientCard';
import GradientWrapper from '../../style/gradient/GradientWrapper';
import GradientRole from '../../style/gradient/GradientRole';

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
			name: 'role',
			wrapper: GradientWrapper,
			backside: {
				card: GradientBackside,
				props: {
					title: "ROLE",
					text: "SECRET FTA ROLE CARD",
				},
			},
			hidden: {
				card: GradientHidden,
				props: {},
			},
			card: GradientRole,
			props: [
				{

				},
			],
		},
	],
};

export default devDeck;