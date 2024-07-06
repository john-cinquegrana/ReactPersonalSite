import { LinkedIn } from '@mui/icons-material';
import GitHub from '@mui/icons-material/GitHub';
import { Typography, Box } from '@mui/material';

// An interface that contains the social text, icon, and link
interface SocialProps {
	text: string;
	icon: React.ReactNode;
	link: string;
}

const SocialBar = () => {
	const socials: SocialProps[] = [
		{
			text: 'Github',
			icon: <GitHub />,
			link: 'github.com',
		},
		{ text: 'LinkedIn', icon: <LinkedIn />, link: 'linkedin.com' },
	];

	return (
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

			// ...
		>
			{socials.map((social, index) => (
				// A Box containing the relevant icon and the text
				<Box
					key={index}
					sx={{
						display: 'flex',
						flexFlow: 'row nowrap',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{social.icon}
					<Typography variant='subtitle1'>{social.text}</Typography>
				</Box>
			))}
		</Box>
	);
};

export default SocialBar;
