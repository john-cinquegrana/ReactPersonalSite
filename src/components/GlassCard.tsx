import { Card, CardProps } from '@heroui/react';

import React from 'react';

interface GlassCardProps extends CardProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, style, ...props }) => {
	return (
		<Card
			style={{
				// backdropFilter: `blur(${blur}px)`, // Adding blur effect
				// WebkitBackdropFilter: `blur(${blur}px)`, // Adding blur effect for Safari
				...style,
			}}
			{...props}
			className={props.className + ' bg-opacity-70 backdrop-blur-sm '}
		>
			{children}
		</Card>
	);
};

export default GlassCard;
