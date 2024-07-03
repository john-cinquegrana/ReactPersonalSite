
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
        usedColor = theme.palette.secondaryContainer;
    }
    else {
        usedColor = color;
    }

    return (
        <Box sx={{
            backgroundColor: usedColor,
            color: theme.palette.onSecondaryContainer,
            padding: '6px',
            borderRadius: '6px',
        }}>
            <Typography
                variant='body1'

            >{label}</Typography>
        </Box>
    );
};

export default Skill;