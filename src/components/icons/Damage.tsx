import React, {ReactNode} from 'react';
import {faBurn} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Damage = (props: { children?: ReactNode}) =>
{
	return (
		<div
			className={'icon damageIcon'}
		>
			{props.children}
			<FontAwesomeIcon
				icon={faBurn}
			/>
		</div>
	);
};

export default Damage;