import {Deck} from '../index';
import gradient from '../../style/gradient/gradient';
import Card from '../../components/icons/Card';
import React from 'react';
import MaxHp from '../../components/icons/MaxHp';
import Expose from '../../components/icons/Expose';
import {Color, Type} from '../types';
import Player from '../../components/icons/Player';
import Damage from '../../components/icons/Damage';
import Shield from '../../components/icons/Shields';
import HandCard from '../../components/icons/HandCards';
import EquipedCard from '../../components/icons/EquipedCard';
import Hp from '../../components/icons/Hp';

const ftaDeck: Deck = {
	name: 'fta',
	width: 600,
	height: 900,
	x: 10,
	y: 5, // Fragment at 6 height, also place images locally
	style: gradient,
	cards: [
		{
			title: 'Block!',
			text: <div>Block one <Card>direct attack</Card> at yourself</div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Attack!',
			text: <div>Do <Damage> 1 </Damage> directed at a player in range</div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Shadow',
			text: <div>Steal one <HandCard>card</HandCard> from every player in range.</div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Defeated',
			text: <div>Choose <Player> one </Player>in range which gets <Expose> suspended </Expose></div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Gruppen knuddeln',
			text: <div><Player> All </Player> get <Damage> one </Damage>, to block you need to discard an <Card> direct
				attack</Card></div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Claymore',
			text: <div> TODO ICONS, RANGE ICON TODO grüne karten = heilung , Grau = block, negating + icon OR choose</div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Bounty',
			text: <div> Play infront of <Player> one </Player> in range, <Player> everyone </Player>
				<Damage> damaging </Damage> him successfully can draw <Card> 1 </Card></div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Merch Store',
			text: <div> Reveal as many cards aa <Player /> are alive, <Player>everyone</Player> can
				choose <Card> one </Card> starting at <Player>you</Player>. </div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Teleport',
			text: <div> Switch positions with another <Player /> at the table, including roles.</div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Black hole',
			text: <div> Play <Card>this</Card> anytime, negating all effects of another card
				excluding <Card>golden</Card></div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Knowledge',
			text: <div> Choose a <Player /> and name <Card> 3 </Card>, all named cards musst be given
				to <Player>you</Player></div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Gear Two',
			text: <div> Until the end of your turn <Player>you</Player> can play unlimited <Card>direct attack</Card>
			</div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Gear Two',
			text: <div> Until the end of your turn <Player>you</Player> can play unlimited <Card>direct attack</Card></div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Galisebi the lier',
			text: <div> Remove <HandCard>one</HandCard> <EquipedCard> or </EquipedCard> of a <Player>player you choose</Player></div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Stimpistol',
			text: <div> Heal <Player>yourself</Player> for <Hp>2</Hp> or another <Player/> for <Hp>1</Hp></div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Energy Drink',
			text: <div> Heal <Player>yourself</Player> for <Hp>1</Hp>, if you die while holding this card you survive with <Hp>1</Hp> instead</div>,
			image: '',
			amount: 1,
		},
		{
			title: '200 Berry',
			text: <div> You can play this card as an <Card>Attack</Card> <Card>Block</Card> or <Card>Energy Drink</Card></div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Diebstahl',
			text: <div> Steal <HandCard>one</HandCard> from a <Player></Player> you choose.</div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Critical Block',
			text: <div> Negate <Damage>All</Damage> you would receive at once</div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Bodyguard',
			text: <div> If <Player>another</Player> receives <Damage/> you can nullify it and draw <Card>2</Card>. The saved <Player/> receives <Shield>1</Shield></div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Justice',
			text: <div> The <Player/> with most most <Hp/> receives <Damage>2</Damage>, the <Player/> with the lowest <Hp/> receives <Hp>1</Hp></div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Justice',
			text: <div> The <Player/> with most most <Hp/> receives <Damage>2</Damage>, the <Player/> with the lowest <Hp/> receives <Hp>1</Hp></div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Kirschblütenbaum',
			text: <div> Choose one of following effects:<br/> <Player>All</Player> regenerate <Hp>1</Hp>. <br/> <Player>You</Player> regain <Hp>2</Hp>. <br/> <Player>You</Player> gain <Shield>1</Shield>.</div>,
			image: '',
			amount: 1,
		},
		{
			title: 'King',
			text: <div> You can play <Card>this</Card> at any time. <br/> End the current turn, it's your turn now. </div>,
			image: '',
			amount: 1,
			color: Color.GOLD
		},
		{
			title: 'Pazifista',
			text: <div> <Player>All </Player> get <Damage>one </Damage>, to block they need to discard an <Card>direct attack</Card> </div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Yomi Yomi no Mi',
			text: <div><Player>All dead</Player> get revived with <Hp>1</Hp> at the start of their turn.</div>,
			image: 'https://pm1.narvii.com/6645/f99f098030c79b3e51132d22c0161ec3d0ccd579_00.jpg',
			amount: 1,
			color: Color.GOLD
		},
		{
			title: 'Critical Block',
			text: <div> Negate <Damage>All</Damage> you would receive at once</div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Finka Boost',
			text: <div><Player>All</Player> regenerate <Hp>1</Hp>. <br/> Every <Player/> you choose gains <Shield>1</Shield>. <br/> Draw <Card>one</Card> for every player chosen</div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Operation',
			text: <div>Regenerate <MaxHp>one</MaxHp> of a <Player/> you choose, this player is <Expose>suspended</Expose> </div>,
			image: '',
			amount: 1,
		},
		{
			title: 'Frankfurt',
			text: <div>Draw <Card> 4 </Card>, lose <MaxHp> 1 </MaxHp> and gain <Shield>1</Shield></div>,
			image: '',
			amount: 8,
		},
		{
			title: 'Arena',
			text: <div>Lay alternating <Card>attack cards</Card>, first to stop gets <Expose> suspended </Expose> and
				receives <Damage>1</Damage></div>,
			image: 'https://i.imgur.com/M3OLWR0.jpg',
			amount: 8,
		},
		{
			title: 'Orbital Bombardment',
			text: <div>By the Emperor, <Player>everyone</Player> gets <Damage> 3 </Damage> blocked by <Card>1
				block</Card> each</div>,
			image: 'https://i.redd.it/oupswmepc5y11.jpg',
			color: Color.GOLD,
			amount: 8,
		},
		{
			title: 'Underground Hydra',
			text: <div>Gain <Damage> +1 </Damage> on all your attacks.</div>,
			image: 'https://vignette.wikia.nocookie.net/thecreatureworldcc/images/9/99/Hydra.jpg/revision/latest?cb=20190813230403',
			color: Color.BLUE,
			type: Type.VEHICLE,
			amount: 8,
		},
	],
};

export default ftaDeck;