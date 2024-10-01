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
				padding: {
					xs: '8px 10px',
					sm: '8px 12px',
					md: '9px 13px',
					lg: '8px 14px',
					xl: '10px 16px',
				},
				margin: '4px',
				borderRadius: '10px',
			}}
		>
			<Typography
				variant='body1'
				sx={{
					letterSpacing: '0.09rem',
					fontWeight: 500,
				}}
			>
				{label}
			</Typography>
		</Box>
	);
};

export default Skill;
