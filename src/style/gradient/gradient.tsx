import React from 'react';
import {Style} from '../index';
import GradientWrapper from './GradientWrapper';
import GradientBackside from './GradientBackside';
import GradientHidden from './GradientHidden';
import GradientCard from './GradientCard';

const gradient: Style = {
	card: GradientCard,
	backside: GradientBackside,
	hidden: GradientHidden,
	wrapper: GradientWrapper,
};

export default gradient;