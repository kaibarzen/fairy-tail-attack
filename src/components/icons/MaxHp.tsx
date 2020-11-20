import React, {ReactNode} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

const MaxHp = (props: { children?: ReactNode }) =>
{
	return (
		<div
			className={'icon hpIcon'}
		>
			{props.children}
			<FontAwesomeIcon
				icon={faHeart}

			/>
		</div>
	);
};

export default MaxHp;
