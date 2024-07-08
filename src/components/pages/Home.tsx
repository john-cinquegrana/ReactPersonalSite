import React from 'react';
import AboutMe from '../content/AboutMe';
import { Box, Typography, useTheme } from '@mui/material';
import MainHeader from '../MainHeader';
import WorkExperience from '../cards/WorkExperience';
import SocialBar from '../content/SocialBar';
import BubbbleSvg from './../../assets/circle-scatter.svg';
import Color from 'color';

const Home: React.FC = () => {
	const theme = useTheme();

	// Add opacity to the background of the card element
	// const backgroundColor = Color(theme.palette.background.default)
	const backgroundColor = Color(theme.palette.primaryContainer)
		.alpha(0.5)
		.string();

	return (
		<Box
			sx={{
				display: 'flex',
				flexFlow: 'column nowrap',
				justifyContent: 'flex-start',
				alignItems: 'stretch',
			}}
		>
			<MainHeader title='John Cinquegrana' />
			<SocialBar />
			<Box
				sx={{
					display: 'flex',
					flexFlow: 'column nowrap',
					justifyContent: 'flex-start',
					alignItems: 'stretch',
					padding: '0px',
					imageRendering: 'crisp-edges',
					backgroundImage: `url(${BubbbleSvg})`,
					backgroundRepeat: 'repeat-y',
					backgroundSize: '100% auto',
					'@keyframes swim': {
						from: {
							backgroundPosition: 'center 6500px',
						},
						to: { backgroundPosition: 'center 0px' },
					},
					animation: 'swim 3600s infinite linear',
				}}
			>
				<AboutMe />
				<Box>
					<Typography
						variant='h2'
						padding={4}
						align='center'
						sx={{
							backdropFilter: 'blur(20px)',
							backgroundColor: backgroundColor,
							width: 'auto',
						}}
					>
						Work Experience
					</Typography>
				</Box>
				<WorkExperience
					title='Lead Mobile and FullStack Developer'
					company='911inform'
					startDate='05/2022'
					endDate='08/2023'
					location='Farmingdale, NJ'
					skills={[
						'Flutter',
						'Dart',
						'AWS',
						'Firebase',
						'Aruba IoT',
						'CI/CD',
					]}
				>
					<ul>
						<li>
							<Typography variant='body1'>
								Lead architecture, design, and development, of a
								Flutter-based mobile application deployed to
								Android and iOS
							</Typography>
						</li>
						<li>
							<Typography variant='body1'>
								Integrated into Aruba IoT to dynamically track
								phones across WLAN for the purposes of locating
								911 calls
							</Typography>
						</li>
						<li>
							<Typography variant='body1'>
								Lead developers in high stress scenarios to
								provide necessary hotfixes on day-of-discovery
								for website vulnerabilities
							</Typography>
						</li>
						<li>
							<Typography variant='body1'>
								Designed CI/CD for deployment of mobile apps to
								both testers, and app stores, using Firebase and
								AWS CodeStar
							</Typography>
						</li>
					</ul>
				</WorkExperience>
				<WorkExperience
					title='Lead Mobile and FullStack Developer'
					company='Rutgers University'
					startDate='09/2023'
					endDate='Present'
					location='New Brunswick, NJ'
					skills={[
						'Flutter',
						'React',
						'Springboot',
						'SQL',
						'Firebase',
					]}
				>
					<ul>
						<li>
							<Typography variant='body1'>
								Hired to the Lead Developer position, operating
								as the POC, architect, and manager for all
								mobile applications
							</Typography>
						</li>
						<li>
							<Typography variant='body1'>
								Brought the MyRutgers mobile application to it's
								1.0 release for over a 100,000 students and
								staff
							</Typography>
						</li>
						<li>
							<Typography variant='body1'>
								Designed, wrote, and maintained a Flutter/Native
								Frontend, communicating with a Firebase/Java
								Springboot Backend
							</Typography>
						</li>
						<li>
							<Typography variant='body1'>
								Implemented and taught advanced programming
								techniques including State Management,
								Component-Based design, and SOLID principles to
								a diverse programming team
							</Typography>
						</li>
					</ul>
				</WorkExperience>
			</Box>
		</Box>
	);
};

export default Home;
