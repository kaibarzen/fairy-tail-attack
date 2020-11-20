import React, {ReactNode} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-regular-svg-icons';

const Card = (props: { children?: ReactNode }) =>
{
	return (
		<div
			className={'icon cardIcon'}
		>
			{props.children}
			<FontAwesomeIcon
				icon={faFile}
			/>
		</div>
	);
};

export default Card;
