import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import Skill from '../Skill';

interface WorkExperienceProps {
	// Define the props for your component here
}

const WorkExperience: React.FC<WorkExperienceProps> = () => {
	// Implement your component logic here

	return (
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
					variant='h3'
					paddingBottom={2}
				>
					Lead Mobile and FullStack Developer
				</Typography>
				<Typography
					variant='h4'
					paddingBottom={2}
				>
					911inform
				</Typography>
				<Typography variant='subtitle1'>
					<i>05/2022 - 08/2023</i>
				</Typography>
				<Typography
					variant='body1'
					paddingBottom={2}
				>
					An all-encompassing 911 and emergency management solution
				</Typography>
				<Typography variant='h6'>Experiences</Typography>
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
				<Typography variant='h6'>Relevant Skills</Typography>
				<Box>
					<Skill label='Flutter'></Skill>
				</Box>
			</CardContent>
		</Card>
	);
};

export default WorkExperience;
