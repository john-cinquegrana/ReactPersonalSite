import { Box, Typography, useTheme } from '@mui/material';
import Color from 'color';
import React from 'react';

const TransparentHeader: React.FC = () => {
	const theme = useTheme();

	// Add opacity to the background of the card element
	// const backgroundColor = Color(theme.palette.background.default)
	const backgroundColor = Color(theme.palette.background.default)
		.alpha(0.5)
		.string();

	return (
		<Box
			sx={{
				display: 'flex',
				flexFlow: 'column nowrap',
				justifyContent: 'flex-start',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					backdropFilter: 'blur(10px)',
					backgroundColor: backgroundColor,
					padding: '12px',
					borderRadius: '8px',
					width: 'auto',
				}}
			>
				<Typography
					variant='h2'
					align='center'
					sx={{
						display: 'inline',
					}}
				>
					Work Experience
				</Typography>
			</Box>
		</Box>
	);
};

export default TransparentHeader;
