import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import { keyframes } from '@emotion/react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Breakpoint, useBreakpoint } from '@root/hooks/styleHooks';

const possibleTexts = [
	'Mobile Developer With a Long Title',
	'Worthy Opponent',
	'Amazing Developer',
	'Full-Stack Stacker',
	'The Best React Developer',
	'Jazz',
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
			textAlign={'left'}
			fontSize={30}
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

const Roulette: React.FC = () => {
	const animationTime = 2;

	// Create the state that we need to manage the roulette
	const [currentText, setCurrentText] = React.useState<string>(
		possibleTexts[0],
	);
	const [nextText, setNextText] = React.useState<string | undefined>(
		undefined,
	);
	// const [scrollText, setScrollText] = React.useState<string[] | undefined>(
	// 	undefined,
	// );
	const [isAnimating, setIsAnimating] = React.useState<boolean>(false);

	const handleClick = () => {
		// Variable to store the next text value
		let newText: string | undefined;
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
		// Set the state to animate
		setIsAnimating(true);
		// Wait for the animation to finish
		setTimeout(() => {
			// Set the new text value
			setCurrentText(newText!);
			// Reset the next text value
			setNextText(undefined);
			// Reset the animation
			setIsAnimating(false);
		}, animationTime * 1000);
		// How else would we know the button was clicked?
		console.log('Button clicked');
	};

	// const spinHeight = 20;

	const currentBreakpont = useBreakpoint();

	let animationSize: number;

	switch (currentBreakpont) {
		case Breakpoint.XS:
			animationSize = 14;
			break;
		case Breakpoint.SM:
			animationSize = 20;
			break;
		case Breakpoint.MD:
			animationSize = 34;
			break;
		case Breakpoint.LG:
			animationSize = 42;
			break;
		case Breakpoint.XL:
			animationSize = 52;
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
			const curTextAnimation = animateY(0, animationSize * 2);
			const nextTextAnimation = animateY(-animationSize * 2, 0);
			return (
				<>
					<RouletteText
						key={currentText}
						sx={{
							animation: `${curTextAnimation} ${animationTime}s linear`,
							animationFillMode: 'forwards',
							position: 'absolute',
						}}
						text={currentText}
					/>
					<RouletteText
						key={nextText}
						sx={{
							animation: `${nextTextAnimation} ${animationTime}s linear`,
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
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					width: {
						xs: '190px',
						sm: '245px',
						md: '390px',
						lg: '460px',
						xl: '550px',
					},
					height: {
						xs: '14px',
						sm: '20px',
						md: '34px',
						lg: '42px',
						xl: '52px',
					},
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				{createRouletteText()}
			</Box>
			<IconButton
				onClick={handleClick}
				color='primary'
				disabled={isAnimating}
			>
				<RefreshIcon />
			</IconButton>
		</Box>
	);
};

export default Roulette;
