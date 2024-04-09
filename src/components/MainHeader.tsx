import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

interface MainHeaderProps {
    title: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
    return (
        // A box that aligns all of its items into a column
        <Box sx={{
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        }}>
            <Box sx={{
                height: 0,
            }} />
            <Box sx={{
                margin: 20
            }}>
                <Typography
                    variant='h1'
                    textAlign={'left'}
                    fontWeight={700}
                    letterSpacing='0.15rem'
                >{title}</Typography>
                <Typography
                    marginLeft={4}
                    variant='subtitle1'
                    textAlign={'left'}
                    fontSize={30}
                    fontWeight={500}
                    letterSpacing='0.10rem'
                >The World exists for Passion and Beauty</Typography>

            </Box>
        </Box >
    );
};

export default MainHeader;