/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from 'react';
import { Box, SxProps } from '@mui/system';
import Circle from './Circle';
import { keyframes, css, Keyframes } from '@emotion/react';

interface BubblesProps {
	sx?: SxProps;
}

interface CircleProps {
	id: number;
	size: number;
	top: number | string;
	left: number | string;
	animation?: Keyframes;
}

/**
 * Genearates random circles to be displayed across the component.
 * @param count The number of circles to generate
 * @param componentHeight The height of the component
 * @param componentWidth The width of the component
 * @returns A list of circles randomly distributed across the component
 */
const generateRandomCircles = (
	count: number,
	getId: () => number,
): CircleProps[] => {
	return Array.from({ length: count }, () => ({
		id: getId(),
		size: Math.random() * 50 + 10,
		top: `${Math.random() * 85 + 15}%`,
		left: `${Math.random() * 110 - 5}%`,
	}));
};

/**
 * @returns A circle specifically generated to appear off the bottom of the screen.
 */
const offScreenCircle = (
	componentHeight: number,
	componentWidth: number,
	id: number,
): CircleProps => {
	const size = Math.random() * 50 + 10;
	const top = Math.random() * 100 + size + componentHeight + 'px';
	return {
		id: id,
		size: size,
		top: top,
		left: Math.random() * (componentWidth + size * 2) - size + 'px',
		animation: keyframes`
            0% { top: ${top}; }
            100% { top: -${size}px; }
        `,
	};
};

function useCounter(initialValue: number) {
	const counterRef = useRef(initialValue);

	const increment = () => {
		counterRef.current += 1;
	};

	const decrement = () => {
		counterRef.current -= 1;
	};

	const getValue = () => {
		return counterRef.current++;
	};

	return { increment, decrement, getValue };
}

/**
 * @returns An HTML element which has bubbles constantly moving upwards over it.
 */
const Bubbles: React.FC<BubblesProps> = ({ sx }) => {
	const idCounter = useCounter(0);

	const [circles, setCircles] = useState<CircleProps[]>(
		generateRandomCircles(10, idCounter.getValue),
	);

	const removeCircle = (id: number) => {
		console.log(`Removing circle with id: ${id}`);
		setCircles((prevCircles) =>
			prevCircles.filter((circle) => circle.id !== id),
		);
	};

	// console.log('initial circles', circles);

	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const addCircle = (circle: CircleProps) => {
			setCircles((prevCircles) => [...prevCircles, circle]);
		};

		const interval = setInterval(() => {
			if (containerRef.current) {
				const componentHeight = containerRef.current.clientHeight;
				const componentWidth = containerRef.current.clientWidth;
				// Generate a circle to appear off screen
				const newCircle = offScreenCircle(
					componentHeight,
					componentWidth,
					idCounter.getValue(),
				);
				addCircle(newCircle);
			}
		}, 5 * 1000); // Generate a new bubble every 10 seconds

		// Cleanup function to run after component is removed
		return () => {
			clearInterval(interval);
		};
	}, [idCounter]);

	const moveUp = (size: number) => keyframes`
            0% { }
            100% { top: -${size}px; }
        `;

	const handleAnimationEnd = (id: number) => {
		removeCircle(id);
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
					css={css`
						animation: ${moveUp(circle.size)} 60s linear;
						position: absolute;
						top: ${circle.top};
						left: ${circle.left};
						align-items: center;
					`}
					onAnimationEnd={() => handleAnimationEnd(circle.id)}
				>
					<Circle
						color='#FF750D'
						radius={circle.size}
					/>
				</div>
			))}
		</Box>
	);
};

export default Bubbles;
