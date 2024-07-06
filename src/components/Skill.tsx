import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

interface SkillProps {
	color?: string;
	label: string;
}

const Skill: React.FC<SkillProps> = ({ color, label }) => {
	const theme = useTheme();

	// Use a default color if one is not passed in
	let usedColor: string;

	if (!color) {
		usedColor = theme.palette.primary.main;
	} else {
		usedColor = color;
	}

	return (
		<Box
			sx={{
				backgroundColor: usedColor,
				color: theme.palette.onPrimary,
				padding: '12px 16px 12px 16px',
				margin: '4px',
				borderRadius: '10px',
			}}
		>
			<Typography
				variant='subtitle1'
				sx={{
					letterSpacing: '0.09rem',
					fontWeight: 500,
					opacity: 1,
					fontStyle: 'normal',
				}}
			>
				{label}
			</Typography>
		</Box>
	);
};

export default Skill;
