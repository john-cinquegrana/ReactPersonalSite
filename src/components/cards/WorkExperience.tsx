import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import Skill from '../Skill';
import Color from 'color';

interface WorkExperienceProps {
	// Define the props for your component here
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	skills: string[];
}

const WorkExperience: React.FC<PropsWithChildren<WorkExperienceProps>> = ({
	title,
	company,
	location,
	startDate,
	endDate,
	skills,
	children,
}) => {
	// Grab the theme so we can pull out colors
	const theme = useTheme();

	// Add opacity to the background of the card element
	const backgroundColor = Color(theme.palette.primaryContainer).alpha(0.9);
	return (
		<Card
			sx={{
				margin: 10,
				padding: 6,
				backgroundColor: backgroundColor.string(),
				backdropFilter: 'blur(10px)',
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
					{title}
				</Typography>
				<Box
					sx={{
						// A basic row wrap
						display: 'flex',
						flexFlow: 'row wrap',
						justifyContent: 'flex-start',
						alignItems: 'flex-end',
						width: '100%',
					}}
				>
					<Typography
						variant='h4'
						paddingRight={8}
					>
						{company}
					</Typography>
					<Box
						sx={{
							// Make the box a flex row with wrap
							display: 'flex',
							flexFlow: 'row wrap',
							justifyContent: 'space-between',
							alignItems: 'flex-end',
							maxWidth: '500px',
							flexGrow: 1,
						}}
					>
						<Typography variant='subtitle1'>
							<i>
								{startDate} - {endDate}
							</i>
						</Typography>
						<Typography variant='subtitle1'>{location}</Typography>
					</Box>
				</Box>
				<Typography
					variant='subtitle2'
					paddingBottom={2}
				>
					An all-encompassing 911 and emergency management solution
				</Typography>
				<Typography variant='h6'>Experiences</Typography>
				{children}
				<Typography variant='h6'>Relevant Skills</Typography>
				<Box
					sx={{
						display: 'flex',
						flexFlow: 'row wrap',
						justifyContent: 'flex-start',
						alignItems: 'center',
					}}
				>
					{skills.map((skill) => (
						<Skill
							label={skill}
							key={skill}
						></Skill>
					))}
				</Box>
			</CardContent>
		</Card>
	);
};

export default WorkExperience;
