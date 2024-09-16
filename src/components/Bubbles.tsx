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
	top: number;
	left: number;
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
	const minBubleSpeed = 5; //Measured in px per second
	const maxBubleSpeed = 10; //Measured in px per second
	const minBubbleSize = 15;
	const maxBubbleSize = 100;
	const bubbleSpace = 300; // The maximum distance between bubbles

	// Seconds between bubbles calculated to keep average spacing between bubbles
	const bubbleTimer =
		(bubbleSpace + (minBubbleSize + maxBubbleSize) / 2) /
		((minBubleSpeed + maxBubleSpeed) / 2);

	const maxHeight = useRef(2500); // The height we initially make bubbles down to
	const maxWidth = useRef(2000); // The width we initially make bubbles across to

	function calcHeight(node: HTMLDivElement) {
		const currentHeight = node.getBoundingClientRect().height;
		if (maxHeight.current < currentHeight) {
			maxHeight.current = currentHeight;
		}
		return maxHeight.current;
	}

	function calcWidth(node: HTMLDivElement) {
		const currentWidth = node.getBoundingClientRect().width;
		if (maxWidth.current < currentWidth) {
			maxWidth.current = currentWidth;
		}
		return maxWidth.current;
	}

	const getCircleId = useCounter(0);

	// Hooks used for the state of the bubbles

	const [circles, setCircles] = useState<CircleProps[]>(() => {
		// Build the random array of initial bubbles
		const initialBubbles: CircleProps[] = [];
		let currentHeight = Math.random() * 300 + 20;
		while (currentHeight < maxHeight.current) {
			const speed =
				Math.random() * (maxBubleSpeed - minBubleSpeed) + minBubleSpeed;
			const size =
				Math.random() * (maxBubbleSize - minBubbleSize) + minBubbleSize;
			const left = Math.random() * (maxWidth.current + size * 2) - size;
			const circle = {
				id: getCircleId(),
				size: size,
				left: left,
				top: currentHeight,
				circleSpeed: speed,
			};
			initialBubbles.push(circle);
			currentHeight += Math.random() * (bubbleSpace + size);
		}
		return initialBubbles;
	});

	const [node, setNode] = useState<HTMLDivElement>();

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
					calcHeight(node),
					calcWidth(node),
					getCircleId(),
				);
				addCircle(newCircle);
			}
		}, bubbleTimer * 1000); // Generate a new bubble every 10 seconds

		// Cleanup function to run after component is removed
		return () => {
			clearInterval(interval);
		};
	}, [node, getCircleId, bubbleTimer]);

	const removeCircle = (id: number) => {
		console.log('remove circle', id);
		setCircles((prevCircles) =>
			prevCircles.filter((circle) => circle.id !== id),
		);
	};

	const handleAnimationEnd = (id: number) => {
		removeCircle(id);
	};

	const moveUp = (distance: number) => keyframes`
            0% { transform: translateY(0); }
            100% { transform: translateY(-${distance}px); }
        `;

	function makeCss(circle: CircleProps) {
		// Calculate the distance for the animation depending on how far down we are
		const position = circle.top + circle.size * 2;
		// Re-calculate the timing based off the position and animation speed
		const animationTime = position / circle.circleSpeed;

		const animation = css`
			${moveUp(position + circle.size)} ${animationTime}s linear
		`;

		const styles = css`
			animation: ${animation};
			top: ${circle.top}px;
			left: ${circle.left}px;
			position: absolute;
			display: flex;
			justifycontent: center;
			alignitems: center;
		`;
		// console.log('styles', styles);
		return styles;
	}

	/**
	 * @returns A circle specifically generated to appear off the bottom of the screen.
	 */
	const offScreenCircle = (
		componentHeight: number,
		componentWidth: number,
		id: number,
	): CircleProps => {
		// Log out the circle we are adding
		const size =
			Math.random() * (maxBubbleSize - minBubbleSize) + minBubbleSize;
		const top = Math.random() * 100 + size + componentHeight;
		// Decide a random time to traverse the screen
		const speed =
			Math.random() * (maxBubleSpeed - minBubleSpeed) + minBubleSpeed;
		return {
			id: id,
			size: size,
			top: top,
			left: Math.random() * (componentWidth + size * 2) - size,
			circleSpeed: speed,
		};
	};

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
