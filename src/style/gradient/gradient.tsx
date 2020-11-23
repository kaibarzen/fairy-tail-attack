import {Style} from '../index';
import GradientWrapper from './GradientWrapper';
import GradientBackside from './GradientBackside';
import GradientHidden from './GradientHidden';
import GradientCard from './GradientCard';
import GradientRole from './GradientRole';
import React from 'react';

const gradient: Style = {

	action: {
		card: GradientCard,
		backside: GradientBackside,
		hidden: GradientHidden,
	},

	role: {
		card: GradientRole,
		backside: GradientBackside,
		hidden: GradientHidden,
	},

	wrapper: GradientWrapper,

};

export default gradient;