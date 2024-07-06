import { Box, Typography } from '@mui/material';

const SocialBar = () => {
	// Implement component logic here

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
		>
			<Typography variant='caption'>Github</Typography>
			<Typography variant='caption'>LinkedIn</Typography>
			<Typography variant='caption'>Email</Typography>
			<Typography variant='caption'>Address</Typography>
		</Box>
	);
};

export default SocialBar;
