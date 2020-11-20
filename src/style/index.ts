import React, {ComponentElement, ComponentType, ReactElement, ReactNode} from 'react';
import {Card as DeckCard} from "../decks/index"

export interface Wrapper
{
	children: ReactNode
}

export interface Backside
{
	width?: number,
	height?: number,
}

export interface Hidden
{
	width?: number,
	height?: number,
}

export interface Card extends DeckCard
{
	width?: number,
	height?: number,
}

export interface Style
{
	card: React.ComponentType<Card>,
	backside: React.ComponentType<Backside>,
	hidden: React.ComponentType<Hidden>,
	wrapper?: React.ComponentType<Wrapper>,
}