import React, {ReactNode} from 'react';
import {faShieldAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Shield = (props: { children?: ReactNode }) =>
{
	return (
		<div
			className={'icon shieldIcon'}
		>
			{props.children}
			<FontAwesomeIcon
				icon={faShieldAlt}
			/>
		</div>
	);
};

export default Shield;