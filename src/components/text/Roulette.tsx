import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import { keyframes } from '@emotion/react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Breakpoint, useBreakpoint } from '@root/hooks/styleHooks';

const possibleTexts = [
	// Business Titles
	'Mobile Engineer and Team Leader',
	'Experienced Flutter Lead',
	'Cloud Architect',
	'Full-Stack Speed Stacker',
	// Personal Titles
	'The Best React Developer',
	'Ultimate Frisbee Enthusiast',
	'Speedrun World-Record Holder',
	'Jazz',
	// Fun Titles
	'Worthy Opponent',
	'Renaissance Faire Tavern Hopper',
	'404 Please Try Again',
	'Thin Crust Connoisseur',
];

interface RouletteTextProps {
	text: string;
	sx?: object;
}

const RouletteText: React.FC<RouletteTextProps> = ({ text, sx }) => {
	return (
		<Typography
			variant='subtitle1'
			marginLeft={4}
			fontSize={{
				xs: '1rem',
				sm: '1rem',
				md: '1.215rem',
				lg: '1.5rem',
				xl: '1.86rem',
			}}
			textAlign={'left'}
			fontWeight={500}
			letterSpacing='0.10rem'
			sx={{
				whiteSpace: 'nowrap',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				margin: 0,
				...sx,
			}}
		>
			{text}
		</Typography>
	);
};

function animateY(start: number, end: number) {
	return keyframes`
		0% {
			transform: translateY(${start}px);
		}
		100% {
			transform: translateY(${end}px);
		}
	`;
}

function bounceAnimation(height: number) {
	return keyframes`
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-${height}px);
		}
		100% {
			transform: translateY(0);
		}`;
}

function shuffleArray<T>(array: Array<T>) {
	for (let i = array.length - 1; i >= 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

const Roulette: React.FC = () => {
	// How long the jump animation runs at the start
	const animationStartup = 0.4;
	// The overlap time between the jump and roulette wheel animations
	const animationBuffer = 0.1;
	// The time between each word coming down
	const animationStepTime = 0.17;
	// How long it takes for each word to reach the bottom
	const moveTime = 0.4;

	// Create the state that we need to manage the roulette
	const [currentText, setCurrentText] = React.useState<string>(
		possibleTexts[0],
	);
	const [nextText, setNextText] = React.useState<string | undefined>(
		undefined,
	);
	const [scrollText, setScrollText] = React.useState<string[] | undefined>(
		undefined,
	);
	const [isAnimating, setIsAnimating] = React.useState<boolean>(false);

	const handleClick = () => {
		// Variable to store the next text value
		let newText: string;
		// Change the state for currentText and nextText
		setNextText(() => {
			// Grab some text that is not the current text
			newText =
				possibleTexts[Math.floor(Math.random() * possibleTexts.length)];
			while (currentText == newText) {
				newText =
					possibleTexts[
						Math.floor(Math.random() * possibleTexts.length)
					];
			}
			// Set the new text value
			return newText;
		});
		// Get all the text that isn't newText or currentText
		const shuffledTexts = possibleTexts
			.filter((text) => text != newText && text != currentText)
			.slice(0, 5);
		shuffleArray(shuffledTexts);
		setScrollText(shuffledTexts);
		// Set the state to animate
		setIsAnimating(true);
		// Wait for the animation to finish
		setTimeout(() => {
			// Set the new text value
			setCurrentText(newText);
			// Reset the next text value
			setNextText(undefined);
			// Reset the animation
			setIsAnimating(false);
		}, (animationStepTime * (shuffledTexts.length + 2) + animationStartup) * 1000);
		// How else would we know the button was clicked?
		console.log('Button clicked');
	};

	// const spinHeight = 20;

	const currentBreakpont = useBreakpoint();

	let animationSize: number;
	let boxHeight: number;

	switch (currentBreakpont) {
		case Breakpoint.XS:
			animationSize = 28;
			boxHeight = 28;
			break;
		case Breakpoint.SM:
			animationSize = 28;
			boxHeight = 28;
			break;
		case Breakpoint.MD:
			animationSize = 34;
			boxHeight = 34;
			break;
		case Breakpoint.LG:
			animationSize = 42;
			boxHeight = 42;
			break;
		case Breakpoint.XL:
			animationSize = 52;
			boxHeight = 52;
			break;
	}

	const animations = Array.from({ length: currentText.length }, () => 'none');
	if (currentText.length > 1) {
		for (let i = 0; i < currentText.length - 1; i++) {
			animations[i] = animateY(-animationSize * 2, 0);
		}
		// Handle the last animation should it exist
		animations[currentText.length - 1] = animateY(0, animationSize * 2);
	}

	function createRouletteText() {
		// If we're not animating, we just return the current text
		if (!isAnimating) {
			return (
				<RouletteText
					key={currentText}
					text={currentText}
				/>
			);
		}
		// If we are animating, give back the two text elements, one going down
		// and the other up
		else {
			// Build the animations
			const curTextAnimation = keyframes`
				100% {
					transform: translateY(${animationSize}px);
				}
			`;
			// Useful variables for the length of animation
			const animationSteps = scrollText?.length ?? 0;
			const stepTime = animationStepTime;
			const baseDelay = animationStartup - animationBuffer;
			// Give back the actual elements
			return (
				<>
					<RouletteText
						key={currentText}
						sx={{
							animation: `${bounceAnimation(
								10,
							)} ${animationStartup}s ease-in-out,
							${curTextAnimation} ${moveTime * 0.5}s linear ${
								animationStartup - animationBuffer
							}s`,

							animationFillMode: 'forwards',
							position: 'absolute',
						}}
						text={currentText}
					/>
					{scrollText?.map((text, index) => (
						<RouletteText
							key={text}
							sx={{
								animation: `${animateY(
									-animationSize,
									animationSize,
								)} ${moveTime}s linear ${
									stepTime * index + baseDelay
								}s`,
								animationFillMode: 'forwards',
								transform: `translateY(-${animationSize}px)`,
								position: 'absolute',
							}}
							text={text}
						/>
					))}
					<RouletteText
						key={nextText}
						sx={{
							animation: `${animateY(-animationSize, 0)} ${
								moveTime * 0.5
							}s linear ${
								stepTime * animationSteps + baseDelay
							}s`,
							transform: `translateY(-${animationSize}px)`,
							animationFillMode: 'forwards',
							position: 'absolute',
						}}
						text={nextText!}
					/>
				</>
			);
		}
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'nowrap',
				justifyContent: 'flex-start',
				width: '100%',
				alignItems: 'center',
			}}
		>
			<IconButton
				onClick={handleClick}
				color='primary'
				disabled={isAnimating}
				// size={iconButtonSize}
				sx={{
					paddingRight: '16px',
				}}
			>
				<RefreshIcon
					sx={{
						fontSize: {
							xs: '1rem',
							sm: '1rem',
							md: '1.215rem',
							lg: '1.5rem',
							xl: '1.86rem',
						},
					}}
				/>
			</IconButton>
			<Box
				sx={{
					width: {
						xs: '324px',
						sm: '324px',
						md: '380px',
						lg: '460px',
						xl: '550px',
					},
					height: `${boxHeight}px`,
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				{createRouletteText()}
			</Box>
		</Box>
	);
};

export default Roulette;
