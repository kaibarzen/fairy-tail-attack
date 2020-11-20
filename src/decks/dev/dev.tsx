import {Deck} from '../index';
import gradient from '../../style/gradient/gradient';
import {Color, Type} from '../types';
import React from 'react';
import Damage from '../../components/icons/Damage';
import Shield from '../../components/icons/Shields';
import Hp from '../../components/icons/Hp';
import MaxHp from '../../components/icons/MaxHp';
import Card from '../../components/icons/Card';
import HandCard from '../../components/icons/HandCards';
import EquipedCard from '../../components/icons/EquipedCard';
import Expose from '../../components/icons/Expose';
import Player from '../../components/icons/Player';

const devDeck: Deck = {
	name: 'dev',
	width: 300,
	height: 450,
	x: 10,
	y: 7,
	style: gradient,
	cards: [
		{
			amount: 2,
			title: 'Orbital Bombardment',
			text: <div>OH FUCK HES COMING LAD <Damage> 6 </Damage> <Shield> 5 </Shield>  <Hp> 5 </Hp> <MaxHp> 6 </MaxHp> <Card> 5 </Card> dasd <HandCard> 4 </HandCard>  <EquipedCard> 5 </EquipedCard> <Expose> 1 </Expose> <Player> ALL </Player></div>,
			image: "https://i.redd.it/oupswmepc5y11.jpg"
		},
		{
			amount: 4,
			title: 'Dragonlore',
			text: 'Gain +4 Reach',
			image: "https://gamebanana.com/skins/embeddables/141594?type=sd_image",
			type: Type.WEAPON
		},
		{
			amount: 2,
			title: 'Magnus Keipp',
			text: 'With Magnus you can attack anyone regardless of reach and do 1 damage.',
			image: "https://cdn.discordapp.com/attachments/594154153895264257/778022911990431744/5b440d2d-1b23-4c78-a165-57d863a1a897.png",
			color: Color.GOLD
		},
		{
			amount: 2,
			title: 'Orbital Bombardment',
			text: 'Every player receives 3 Damage, block negates all damage',
			image: "https://i.redd.it/oupswmepc5y11.jpg",
			color: Color.GOLD
		},
		{
			amount: 2,
			title: 'Orbital Bombardment',
			text: 'Every player receives 3 Damage, block negates all damage',
			image: "https://i.redd.it/oupswmepc5y11.jpg",
			color: Color.BLUE
		},
		{
			amount: 2,
			title: 'Orbital Bombardment',
			text: 'Every player receives 3 Damage, block negates all damage',
			image: "https://i.redd.it/oupswmepc5y11.jpg"
		},
		{
			amount: 50,
			title: 'Magnus Keipp',
			text: 'Instantly win, also Magnus Keip is so great have 100 card of him.',
			image: "https://cdn.discordapp.com/attachments/594154153895264257/778022911990431744/5b440d2d-1b23-4c78-a165-57d863a1a897.png",
			color: Color.BLUE,
			type: Type.WEAPON
		},
	],
};

export default devDeck;