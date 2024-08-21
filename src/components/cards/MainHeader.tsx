import { Card, CardContent, Typography } from '@mui/material';
import { Box, Container, useTheme } from '@mui/system';
import SunsetWaves from './../../assets/sunset-waves.svg';
import React from 'react';
import Color from 'color';

interface MainHeaderProps {
	title: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
	const theme = useTheme();

	// Take the color out of the theme and add opacity to it
	const backgroundColor = Color(theme.palette.inversePrimary);
	console.log(`Without alpha ${backgroundColor}`);
	const withAlpha = backgroundColor.alpha(0.95).string();
	console.log(`With alpha ${withAlpha}`);

	return (
		// A box that aligns all of its items into a column
		<Box
			sx={{
				display: 'flex',
				flexFlow: 'column nowrap',
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
				backgroundColor: '#FF750D',
				// backgroundImage: 'url(/src/assets/sunset-svgrepo-com.svg)',
				// backgroundRepeat: 'no-repeat',
				// backgroundSize: 'cover',
			}}
		>
			<Container
				sx={{
					padding: '0px',
				}}
			>
				<Card
					sx={{
						// margin: {
						// 	[theme.breakpoints.up('md')]: '80px 80px 10px 80px',
						// 	[theme.breakpoints.down('md')]:
						// 		'40px 40px 10px 40px',
						// },
						padding: '16px',
						backgroundColor: withAlpha,
						backdropFilter: 'blur(10px)',
					}}
				>
					<CardContent>
						<Typography
							variant='h1'
							textAlign={'left'}
							fontWeight={700}
							letterSpacing={{
								xl: '0.25rem',
								lg: '0.2rem',
								md: '0.18rem',
								sm: '0.1rem',
								xs: '0.07rem',
							}}
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
			</Container>
			<img
				src={SunsetWaves}
				style={{
					width: '100%',
					height: 'auto',
				}}
			/>
		</Box>
	);
};

export default MainHeader;
