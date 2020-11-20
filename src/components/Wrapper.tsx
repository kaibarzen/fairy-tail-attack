import React, {ReactNode} from 'react';
import {Deck} from '../decks';

interface WrapperProps
{
	deck: Deck
	children: ReactNode,
}

const Wrapper = (props: WrapperProps) =>
{

	if (props.deck.style.wrapper)
	{
		return (
			<props.deck.style.wrapper>
				{props.children}
			</props.deck.style.wrapper>
		);
	}

	return (
		<div>
			{props.children}
		</div>
	);
};

export default Wrapper;