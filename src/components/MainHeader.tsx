import { Card } from '@mui/material';
import React from 'react';

interface MainHeaderProps {
    title: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ title }) => {
    return (
        <Card>
            <h1>{title}</h1>
        </Card>
    );
};

export default MainHeader;