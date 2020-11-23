import React, {ReactNode} from 'react';
import {faSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Square = (props: { children?: ReactNode }) =>
{
	return (
		<div
			className={'icon squareIcon'}
		>
			{props.children}
			<FontAwesomeIcon
				icon={faSquare}
			/>
		</div>
	);
};

export default Square;