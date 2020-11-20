import React, {ReactNode} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFile} from '@fortawesome/free-regular-svg-icons';
import {faBorderAll} from '@fortawesome/free-solid-svg-icons';

const EquipedCard = (props: { children?: ReactNode }) =>
{
	return (
		<div
			className={'icon equipmentCardIcon'}
		>
			{props.children}
			<FontAwesomeIcon
				icon={faBorderAll}
			/>
			<FontAwesomeIcon
				icon={faFile}
			/>
		</div>
	);
};

export default EquipedCard;
