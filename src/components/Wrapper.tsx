import React, {ReactNode} from 'react';
import {Card} from '../decks';

interface WrapperProps
{
	card: Card
	children: ReactNode
}

const Wrapper = (props: WrapperProps) =>
{
	if (props.card.wrapper)
	{
		return (
			<props.card.wrapper>
				{props.children}
			</props.card.wrapper>
		);
	}

	return (
		<div>
			{props.children}
		</div>
	);
};

export default Wrapper;