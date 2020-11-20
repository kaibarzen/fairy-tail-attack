import React, {ReactNode} from 'react';
import {faUserSlash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Expose = (props: {children?: ReactNode }) =>
{
	return (
		<div
			className={'icon exposeIcon'}
		>
			{props.children}
			<FontAwesomeIcon
				icon={faUserSlash}
			/>
		</div>
	);
};

export default Expose;