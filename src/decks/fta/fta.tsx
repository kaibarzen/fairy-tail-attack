import {Deck} from '../index';
import gradient from '../../style/gradient/gradient';
import Card from '../../components/icons/Card';
import React from 'react';
import MaxHp from '../../components/icons/MaxHp';
import Expose from '../../components/icons/Expose';
import {Color, Type} from '../types';
import Player from '../../components/icons/Player';
import Damage from '../../components/icons/Damage';

const ftaDeck: Deck = {
	name: 'fta',
	width: 600,
	height: 900,
	x: 10,
	y: 5, // Fragment at 6 height, also place images locally
	style: gradient,
	cards: [
		{
			title: 'Frankfurt',
			text: <div>Draw <Card> 4 </Card>, lose <MaxHp> 1 </MaxHp></div>,
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Skyline_Frankfurt_am_Main_2015.jpg/1200px-Skyline_Frankfurt_am_Main_2015.jpg"
		},
		{
			title: "Arena",
			text: <div>Lay alternating <Card>attack cards</Card>, first to stop gets <Expose> suspended </Expose></div>,
			image: "https://i.imgur.com/M3OLWR0.jpg"
		},
		{
			title: "Orbital Bombardment",
			text: <div>By the Emperor, <Player>everyone</Player> gets <Damage> 3 </Damage> blocked by <Card>1 block</Card> each</div>,
			image: "https://i.redd.it/oupswmepc5y11.jpg",
			color: Color.GOLD
		},
		{
			title: "Underground Hydra",
			text: <div>Gain <Damage> +1 </Damage> on all your attacks.</div>,
			image: "https://vignette.wikia.nocookie.net/thecreatureworldcc/images/9/99/Hydra.jpg/revision/latest?cb=20190813230403",
			color: Color.BLUE,
			type: Type.VEHICLE
		}
	],
};

export default ftaDeck;