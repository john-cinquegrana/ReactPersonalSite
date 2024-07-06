import { Card, CardContent, Typography, useTheme } from '@mui/material';
import Color from 'color';

const AboutMe = () => {
	const theme = useTheme();

	// Add opacity to the background of the card element
	const backgroundColor = Color(theme.palette.primaryContainer).alpha(0.8);

	return (
		<Card
			sx={{
				padding: 6,
				margin: 10,
				backdropFilter: 'blur(10px)',
				backgroundColor: backgroundColor.string(),
				// opacity: 0.8,
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
					Welcome to my personal website. My name is John Cinquegrana,
					and I am a dedicated software engineer from Hazlet, NJ,
					currently residing in Orange, NJ, just within the NYC metro
					area.
				</Typography>
				<Typography
					variant='body1'
					textAlign={'left'}
					paddingBottom={4}
				>
					I graduated with a Bachelor's degree in Computer Science
					from Stevens Institute of Technology, where I honed my
					skills in software development and cultivated a passion for
					creating impactful technological solutions. My professional
					journey has included significant roles at 911inform and
					Rutgers University. At 911inform, I developed a mobile
					application from the ground up, integrating IoT solutions to
					enhance emergency response times. At Rutgers University, I
					led the development of the MyRutgers mobile application,
					serving over 100,000 students and faculty members with
					advanced state management techniques, CI/CD automations, and
					seamless systems integration. <br />
				</Typography>
				<Typography
					variant='body1'
					textAlign={'left'}
					paddingBottom={4}
				>
					Through these experiences, I have built a strong foundation
					in mobile and full-stack development, continuously driven by
					a commitment to innovation and excellence. Thank you for
					visiting my website, and I look forward to connecting with
					you.
				</Typography>
			</CardContent>
		</Card>
	);
};

export default AboutMe;
