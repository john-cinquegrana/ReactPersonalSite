import { Card, CardContent, Typography } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import React from 'react';

interface MainHeaderProps {
	title: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
	const theme = useTheme();

	console.log(theme);

	return (
		// A box that aligns all of its items into a column
		<Box
			sx={{
				display: 'flex',
				flexFlow: 'column nowrap',
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
				// backgroundImage: 'url(/src/assets/sunset-svgrepo-com.svg)',
				// backgroundRepeat: 'no-repeat',
				// backgroundSize: 'cover',
			}}
		>
			<Box
				sx={{
					height: 0,
				}}
			/>
			<Card
				sx={{
					margin: 20,
					padding: '16px',
					backgroundColor: theme.palette.primaryContainer,
				}}
			>
				<CardContent>
					<Typography
						variant='h1'
						textAlign={'left'}
						fontWeight={700}
						letterSpacing='0.15rem'
					>
						{title}
					</Typography>
					<Typography
						marginLeft={4}
						variant='subtitle1'
						textAlign={'left'}
						fontSize={30}
						fontWeight={500}
						letterSpacing='0.10rem'
					>
						The World exists for Passion and Beauty
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default MainHeader;
