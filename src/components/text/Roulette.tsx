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
			sx={sx}
		>
			{text}
		</Typography>
	);
};

const Roulette: React.FC = () => {
	const animationTime = 2;

	const [texts, setTexts] = React.useState([possibleTexts[0]]);

	const handleClick = () => {
		// Assign a random text, that is not the current one, to the front of texts
		setTexts((prev) => {
			let newText =
				possibleTexts[Math.floor(Math.random() * possibleTexts.length)];
			while (prev.includes(newText)) {
				newText =
					possibleTexts[
						Math.floor(Math.random() * possibleTexts.length)
					];
			}
			return [newText, ...prev];
		});
		// After all the animations, clean the unused text out of the DOM
		setTimeout(() => {
			setTexts((prev) => [prev[0]]);
		}, animationTime * 1000 + 1000); // Duration of the animation
		console.log('Button clicked');
	};

	// const spinHeight = 20;

	const currentBreakpont = useBreakpoint();

	let animationSize;

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

	const animations = Array.from({ length: texts.length }, () => 'none');
	if (texts.length > 1) {
		for (let i = 0; i < texts.length - 1; i++) {
			animations[i] = keyframes`
                0% {
                    transform: translateY(-${animationSize * 2}px);
                }
                100% {
                    transform: translateY(0px);
                }
            `;
		}
		// Handle the last animation should it exist
		animations[texts.length - 1] = keyframes`
            0% {
                transform: translateY(0px);
            }
            100% {
                transform: translateY(${animationSize * 2}px);
            }
        `;
	}

	function createRouletteText(index: number) {
		const length = texts.length;
		if (length === 1) {
			return (
				<RouletteText
					key={texts[index]}
					sx={{
						margin: 0,
						backgroundColor: 'transparent',
					}}
					text={texts[index]}
				/>
			);
		} else {
			return (
				<RouletteText
					key={texts[index]}
					sx={{
						animation: `${animations[index]} ${animationTime}s linear`,
						animationFillMode: 'forwards',
						position: 'absolute',
						margin: 0,
					}}
					text={texts[index]}
				/>
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
				{texts.map((_, index) => createRouletteText(index))}
			</Box>
			<IconButton
				onClick={handleClick}
				color='primary'
				disabled={texts.length > 1}
			>
				<RefreshIcon />
			</IconButton>
		</Box>
	);
};

export default Roulette;
