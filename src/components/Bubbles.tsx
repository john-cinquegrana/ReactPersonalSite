/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, SxProps } from '@mui/system';
import Circle from './Circle';
import { keyframes, css } from '@emotion/react';

interface BubblesProps {
	sx?: SxProps;
}

interface CircleProps {
	id: number;
	size: number;
	topDistance?: number;
	topPercentage?: number;
	left: number | string;
	circleSpeed: number;
}

function useCounter(initialValue: number) {
	const counterRef = useRef(initialValue);

	const getValue = () => {
		const old_value = counterRef.current;
		counterRef.current++;
		return old_value;
	};

	return getValue;
}

/**
 * @returns An HTML element which has bubbles constantly moving upwards over it.
 */
const Bubbles: React.FC<BubblesProps> = ({ sx }) => {
	// Constant values to easily mess with the bubbles
	const initialBubbles = 6;
	const minBubleSpeed = 5; //Measured in px per second
	const maxBubleSpeed = 10; //Measured in px per second
	const minBubbleSize = 15;
	const maxBubbleSize = 100;

	const getCircleId = useCounter(0);

	const [circles, setCircles] = useState<CircleProps[]>(
		Array.from({ length: initialBubbles }, () => {
			// Randomize a speed for each circle
			const speed =
				Math.random() * (maxBubleSpeed - minBubleSpeed) + minBubleSpeed;
			// Get the distance from the top, assuming a scren size of 2000
			const topPercent = Math.random() * 85 + 15;

			// Decide a random bubble size
			const size =
				Math.random() * (maxBubbleSize - minBubbleSize) + minBubbleSize;
			return {
				id: getCircleId(),
				size: size,
				topPercentage: topPercent,
				left: `${Math.random() * 110 - 5}%`,
				circleSpeed: speed,
			};
		}),
	);

	const [node, setNode] = useState<HTMLDivElement>();

	const removeCircle = (id: number) => {
		console.log('remove circle', id);
		setCircles((prevCircles) =>
			prevCircles.filter((circle) => circle.id !== id),
		);
	};

	/**
	 * @returns A circle specifically generated to appear off the bottom of the screen.
	 */
	const offScreenCircle = (
		componentHeight: number,
		componentWidth: number,
		id: number,
	): CircleProps => {
		// Log out the circle we are adding
		console.log('Adding circle', id);
		const size =
			Math.random() * (maxBubbleSize - minBubbleSize) + minBubbleSize;
		const top = Math.random() * 100 + size + componentHeight;
		// Decide a random time to traverse the screen
		const speed =
			Math.random() * (maxBubleSpeed - minBubleSpeed) + minBubleSpeed;
		return {
			id: id,
			size: size,
			topDistance: top,
			left: Math.random() * (componentWidth + size * 2) - size + 'px',
			circleSpeed: speed,
		};
	};

	// Re-render when containerRef changes
	const reMake = useCallback((node: HTMLDivElement | null) => {
		if (node) {
			setNode(node);
		}
	}, []);

	useEffect(() => {
		const addCircle = (circle: CircleProps) => {
			setCircles((prevCircles) => [...prevCircles, circle]);
		};

		const interval = setInterval(() => {
			if (node) {
				const newCircle = offScreenCircle(
					node.getBoundingClientRect().height,
					node.getBoundingClientRect().width,
					getCircleId(),
				);
				addCircle(newCircle);
			}
		}, 1 * 1000); // Generate a new bubble every 10 seconds

		// Cleanup function to run after component is removed
		return () => {
			clearInterval(interval);
		};
	}, [node, getCircleId]);

	const moveUp = (distance: number) => keyframes`
            0% { transform: translateY(0); }
            100% { transform: translateY(-${distance}px); }
        `;

	const handleAnimationEnd = (id: number) => {
		removeCircle(id);
	};

	console.log('Rebuild');

	function makeCss(circle: CircleProps) {
		// Create persistent variables for use later
		let top;

		let animation;
		// Figure out if we're using top distance or percent
		if (circle.topDistance) {
			top = circle.topDistance + 'px';
		} else if (circle.topPercentage) {
			top = circle.topPercentage + '%';
		} else {
			throw new Error('Circle must have topDistance or topPercentage');
		}
		// Only animate if we have a container
		if (!node) {
			animation = 'none';
		} else {
			// Calculate the distance for the animation depending on how far down we are
			const position = circle.topDistance
				? circle.topDistance
				: (circle.topPercentage! *
						node.getBoundingClientRect().height) /
						100 +
				  circle.size * 2;

			// Re-calculate the timing based off the position and animation speed
			const animationTime = position / circle.circleSpeed;

			animation = css`
				${moveUp(position + circle.size)} ${animationTime}s linear
			`;
		}
		const styles = css`
			animation: ${animation};
			top: ${top};
			left: ${circle.left};
			position: absolute;
			display: flex;
			justifycontent: center;
			alignitems: center;
		`;
		// console.log('styles', styles);
		return styles;
	}

	return (
		<Box
			ref={reMake}
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
					css={makeCss(circle)}
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
