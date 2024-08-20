import { Email, GitHub, LinkedIn, Place } from '@mui/icons-material';
import {
	Typography,
	Box,
	SxProps,
	Theme,
	Divider,
	useTheme,
} from '@mui/material';

// An interface that contains the social text, icon, and link
interface SocialProps {
	text: string;
	icon: React.ReactNode;
	link?: string;
}

const SocialBar = () => {
	const socials: SocialProps[] = [
		{
			text: 'GitHub',
			icon: <GitHub />,
			link: 'https://github.com/john-cinquegrana',
		},
		{
			text: 'LinkedIn',
			icon: <LinkedIn />,
			link: 'https://www.LinkedIn.com/in/jcinquegrana/',
		},
		{
			text: 'alllegron@gmail.com',
			icon: <Email />,
			link: 'mailto:alllegron@gmail.com',
		},
		{
			text: 'Orange, NJ',
			icon: <Place />,
		},
	];

	const theme = useTheme();

	const dividerMargin = '4px';
	const dividerColor = theme.palette.secondaryContainer;

	return (
		<Box
			sx={{
				display: 'flex',
				flexFlow: 'column nowrap',
				justifyContent: 'space-between',
				alignItems: 'center',
				margin: 0,
				padding: 0,
			}}
		>
			<Divider
				sx={{
					borderBottomWidth: '2px',
					borderColor: dividerColor,
					marginBottom: dividerMargin,
					width: '88%',
				}}
				variant='fullWidth'
			></Divider>
			<Box
				sx={{
					color: theme.palette.secondary.dark,
					backgroundColor: 'transparent',
					width: '100%',
					padding: {
						xs: '4px 0px',
						sm: '6px 0px',
						md: '8px 0px',
						lg: '9px 0px',
						xl: '10px 0px',
					},
					display: 'flex',
					flexFlow: 'row nowrap',
					justifyContent: 'space-evenly',
					alignItems: 'center',
				}}

				// ...
			>
				{socials.map((social, index) => {
					// The styilng that will be used for the container of the icon and text
					const boxStyling: SxProps<Theme> = {
						display: 'flex',
						flexFlow: 'row nowrap',
						justifyContent: 'center',
						alignItems: 'center',
					};
					// The function to be called when this element is clicked on
					let onClick = undefined;
					// Add extra values if we actually have a link to follow
					if (social.link != undefined) {
						boxStyling.cursor = 'pointer';
						onClick = () => window.open(social.link);
					}
					return (
						// A Box containing the relevant icon and the text
						<Box
							key={index}
							sx={boxStyling}
							// Only do something with the link if we have a function to call
							onClick={onClick}
						>
							{social.icon}
							<Typography
								variant='subtitle2'
								sx={{
									fontStyle: 'normal',
									opacity: 1,
									paddingLeft: '6px',
								}}
							>
								{social.text}
							</Typography>
						</Box>
					);
				})}
			</Box>
			<Divider
				sx={{
					marginTop: dividerMargin,
					borderColor: dividerColor,
					borderBottomWidth: '3px',
					width: '90%',
				}}
				variant='fullWidth'
			></Divider>
		</Box>
	);
};

export default SocialBar;
