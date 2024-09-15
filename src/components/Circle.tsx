import { Box } from '@mui/material';
import React from 'react';
import { SxProps } from '@mui/system';

interface CircleProps {
    color: string;
    radius: number;
    sx?: SxProps;
}

/**
 * @returns A circle element as an SVG.
 */
const Circle: React.FC<CircleProps> = ({ color, radius, sx }) => {
    return (
        <Box sx={sx}>
            <svg width={radius * 2} height={radius * 2}>
                <circle cx={radius} cy={radius} r={radius} fill={color} />
            </svg>
        </Box>
    );
};

export default Circle;