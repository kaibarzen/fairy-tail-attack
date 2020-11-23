import React, {ReactNode} from 'react';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Hp = (props: { children?: ReactNode}) =>
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

export default Hp;