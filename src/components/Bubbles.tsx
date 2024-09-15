import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';

const floatUp = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-100vh);
    }
`;

const generateRandomCircles = (numCircles: number) => {
    return Array.from({ length: numCircles }, () => ({
        id: Math.random().toString(36).substring(2, 9),
        size: Math.random() * 50 + 10,
        left: Math.random() * 100 + '%',
        animationDuration: Math.random() * 10 + 5 + 's',
    }));
};

const Bubbles: React.FC = () => {
    const [circles, setCircles] = useState(generateRandomCircles(10));

    useEffect(() => {
        const interval = setInterval(() => {
            setCircles(generateRandomCircles(10));
        }, 15000); // Regenerate circles every 15 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                backgroundColor: '#282c34',
            }}
        >
            {circles.map((circle) => (
                <Box
                    key={circle.id}
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: circle.left,
                        width: circle.size,
                        height: circle.size,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        animation: `${floatUp} ${circle.animationDuration} linear infinite`,
                    }}
                />
            ))}
        </Box>
    );
};

export default Bubbles;