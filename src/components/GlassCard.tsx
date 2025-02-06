import { Card, CardProps } from '@heroui/react';
import { semanticColors } from '@heroui/theme';
import React from 'react';

interface GlassCardProps extends CardProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, style, ...props }) => {
	// @ts-expect-error HeroUI typed ColorScale like shit
	const content1: string = semanticColors.dark.content1.DEFAULT;

	// console.log(content1);

	const opacityBackground = content1 + 'CC'; // Adding 'CC' to make it slightly see-through

	// console.log(opacityBackground);

	return (
		<Card
			style={{ background: `${opacityBackground}`, ...style }} // Adding 'CC' to make it slightly see-through
			{...props}
		>
			{children}
		</Card>
	);
};

export default GlassCard;
