import React from 'react';

import MainHeader from '../MainHeader';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import WorkExperience from '../cards/WorkExperience';
import AboutMe from '../content/AboutMe';

const Home: React.FC = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexFlow: 'column nowrap',
				justifyContent: 'flex-start',
				alignItems: 'stretch',
				width: '100%',
			}}
		>
			<MainHeader title='John Cinquegrana' />
			<Box
				sx={{
					color: 'white',
					backgroundColor: 'black',
					width: '100%',
					height: '2em',
					display: 'flex',
					flexFlow: 'row nowrap',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				<Typography variant='caption'>Github</Typography>
				<Typography variant='caption'>LinkedIn</Typography>
				<Typography variant='caption'>Email</Typography>
				<Typography variant='caption'>Address</Typography>
			</Box>
			<AboutMe />
			<Typography
				variant='h2'
				padding={4}
				align='center'
			>
				Work Experience
			</Typography>
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
							Flutter-based mobile application deployed to Android
							and iOS
						</Typography>
					</li>
					<li>
						<Typography variant='body1'>
							Integrated into Aruba IoT to dynamically track
							phones across WLAN for the purposes of locating 911
							calls
						</Typography>
					</li>
					<li>
						<Typography variant='body1'>
							Lead developers in high stress scenarios to provide
							necessary hotfixes on day-of-discovery for website
							vulnerabilities
						</Typography>
					</li>
					<li>
						<Typography variant='body1'>
							Designed CI/CD for deployment of mobile apps to both
							testers, and app stores, using Firebase and AWS
							CodeStar
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
				skills={['Flutter', 'React', 'Springboot', 'SQL', 'Firebase']}
			>
				<ul>
					<li>
						<Typography variant='body1'>
							Hired to the Lead Developer position, operating as
							the POC, architect, and manager for all mobile
							applications
						</Typography>
					</li>
					<li>
						<Typography variant='body1'>
							Brought the MyRutgers mobile application to it's 1.0
							release for over a 100,000 students and staff
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
							Component-Based design, and SOLID principles to a
							diverse programming team
						</Typography>
					</li>
				</ul>
			</WorkExperience>
		</Box>
	);
};

export default Home;
