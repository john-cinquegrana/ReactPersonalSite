import React, { useState, useEffect, useRef } from 'react';
import { Box, SxProps } from '@mui/system';
import Circle from './Circle';
import { keyframes } from '@emotion/react';

interface BubblesProps {
	sx?: SxProps;
}

interface CircleProps {
	id: number;
	size: number;
	top: number;
	left: number;
}

const generateRandomCircles = (
	count: number,
	componentHeight: number,
): CircleProps[] => {
	const scrollY = window.scrollY;
	return Array.from({ length: count }, (_, id) => ({
		id,
		size: Math.random() * 50 + 10,
		top: scrollY + componentHeight + Math.random() * 100, // Start just off-screen considering scroll position
		left: Math.random() * window.innerWidth,
	}));
};

const Bubbles: React.FC<BubblesProps> = ({ sx }) => {
	const [circles, setCircles] = useState<CircleProps[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			const componentHeight = containerRef.current.clientHeight;
			setCircles(generateRandomCircles(10, componentHeight));
		}
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			if (containerRef.current) {
				const componentHeight = containerRef.current.clientHeight;
				setCircles((prevCircles) => [
					...prevCircles.filter(
						(circle) => circle.top > -circle.size,
					), // Remove bubbles that have moved off the top
					...generateRandomCircles(1, componentHeight), // Add a new bubble
				]);
			}
		}, 1000); // Generate a new bubble every second

		return () => clearInterval(interval);
	}, []);

	const moveUp = keyframes`
        0% { transform: translateY(0); }
        100% { transform: translateY(-200%); }
    `;

	const handleAnimationEnd = (id: number) => {
		setCircles((prevCircles) =>
			prevCircles.filter((circle) => circle.id !== id),
		);
	};

	return (
		<Box
			ref={containerRef}
			sx={{
				position: 'relative',
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				backgroundColor: 'transparent',
				...sx,
			}}
		>
			{circles.map((circle) => (
				<div
					key={circle.id}
					style={{
						animation: `${moveUp} 20s linear`,
						position: 'absolute',
						top: circle.top,
						left: circle.left,
						width: circle.size,
						height: circle.size,
					}}
					onAnimationEnd={() => handleAnimationEnd(circle.id)}
				>
					<Circle
						key={circle.id}
						color='#FF750D'
						radius={circle.size}
					/>
				</div>
			))}
		</Box>
	);
};

export default Bubbles;
