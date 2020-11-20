import React, {ReactNode} from 'react';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Player = (props: {children?: ReactNode }) =>
{
	return (
		<div
			className={'icon playerIcon'}
		>
			{props.children}
			<FontAwesomeIcon
				icon={faUser}
			/>
		</div>
	);
};

export default Player;