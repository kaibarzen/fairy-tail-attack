import {Deck} from '../index';
import gradient from '../../style/gradient/gradient';

const devDeck: Deck = {
	name: 'dev',
	width: 300,
	height: 450,
	style: gradient,
	cards: [
		{
			amount: 2,
			title: 'primaryyyy',
			text: 'aaaaa aaaaaaaaaaa',
		},
		{
			amount: 1,
			title: 'secondary',
			text: 'bbbbbbbbbbbbbbbbbbbb',
		},
		{
			amount: 101,
			title: 'over 100',
			text: 'CCCCCCCCCCCCC',
		},
	],
};

export default devDeck;