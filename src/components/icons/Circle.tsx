import React, {ReactNode} from 'react';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Circle = (props: { children?: ReactNode }) =>
{
	return (
		<div
			className={'icon circleIcon'}
		>
			{props.children}
			<FontAwesomeIcon
				icon={faCircle}
			/>
		</div>
	);
};

export default Circle;