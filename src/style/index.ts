import React, {ReactNode} from 'react';
import {ActionCard, CharacterCard, RoleCard} from '../decks/index';

export interface Wrapper
{
	children: ReactNode
}

export interface Backside
{
	width: number,
	height: number,
	title?: string,
	text?: string
}

export interface Hidden
{
	width: number,
	height: number,
}

export interface ActionCardStyle extends ActionCard
{
	width: number,
	height: number,
}

export interface CharacterCardStyle extends CharacterCard
{
	width: number,
	height: number,
}

export interface RoleCardStyle extends RoleCard
{
	width: number,
	height: number,
}

export interface Style
{
	card: React.ComponentType<ActionCardStyle>,
	backside: React.ComponentType<Backside>,
	hidden: React.ComponentType<Hidden>,
	wrapper?: React.ComponentType<Wrapper>,
}