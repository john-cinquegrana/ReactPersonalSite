import React from 'react';

import MainHeader from '../MainHeader';
import Box from '@mui/material/Box';
import { Card, CardContent, Typography } from '@mui/material';
import WorkExperience from '../content/WorkExperience';

const Home: React.FC = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexFlow: 'column nowrap',
				justifyContent: 'flex-start',
				alignItems: 'center',
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
			<Card
				sx={{
					margin: 10,
					padding: 6,
				}}
			>
				<CardContent
					sx={{
						display: 'flex',
						flexFlow: 'column nowrap',
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
					}}
				>
					<Typography
						variant='h2'
						paddingBottom={4}
					>
						About Me
					</Typography>
					<Typography
						variant='body1'
						textAlign={'left'}
						paddingBottom={4}
					>
						Welcome to my personal website. My name is John
						Cinquegrana, and I am a dedicated software engineer from
						Hazlet, NJ, currently residing in Orange, NJ, just
						within the NYC metro area.
					</Typography>
					<Typography
						variant='body1'
						textAlign={'left'}
						paddingBottom={4}
					>
						I graduated with a Bachelor's degree in Computer Science
						from Stevens Institute of Technology, where I honed my
						skills in software development and cultivated a passion
						for creating impactful technological solutions. My
						professional journey has included significant roles at
						911inform and Rutgers University. At 911inform, I
						developed a mobile application from the ground up,
						integrating IoT solutions to enhance emergency response
						times. At Rutgers University, I led the development of
						the MyRutgers mobile application, serving over 100,000
						students and faculty members with advanced state
						management techniques, CI/CD automations, and seamless
						systems integration. <br />
					</Typography>
					<Typography
						variant='body1'
						textAlign={'left'}
						paddingBottom={4}
					>
						Through these experiences, I have built a strong
						foundation in mobile and full-stack development,
						continuously driven by a commitment to innovation and
						excellence. Thank you for visiting my website, and I
						look forward to connecting with you.
					</Typography>
				</CardContent>
			</Card>
			<Typography
				variant='h2'
				padding={4}
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
		</Box>
	);
};

export default Home;
