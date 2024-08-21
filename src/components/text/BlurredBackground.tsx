import { Box, useTheme } from '@mui/material';
import Color from 'color';
import React from 'react';

const BlurredBackground: React.FC<React.PropsWithChildren> = ({ children }) => {
	// The theme to be used by our components
	const theme = useTheme();

	// Add opacity to the background of the card element
	// const backgroundColor = Color(theme.palette.background.default)
	const backgroundColor = Color(theme.palette.background.default)
		.alpha(0.5)
		.string();

	return (
		<Box
			sx={{
				backdropFilter: 'blur(10px)',
				backgroundColor: backgroundColor,
				padding: '12px',
				borderRadius: '8px',
				width: 'auto',
			}}
		>
			{children}
		</Box>
	);
};

export default BlurredBackground;
