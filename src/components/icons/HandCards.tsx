import React, {ReactNode} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-regular-svg-icons';
import {faHandPaper} from '@fortawesome/free-solid-svg-icons';

const HandCard = (props: { children?: ReactNode}) =>
{
	return (
		<div
			className={'icon handCardIcon'}
		>
			{props.children}
			<FontAwesomeIcon
				icon={faHandPaper}
			/>
			<FontAwesomeIcon
				icon={faFile}
			/>
		</div>
	);
};

export default HandCard;
