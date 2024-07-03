import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

interface WorkExperienceProps {
    // Define the props for your component here
}

const WorkExperience: React.FC<WorkExperienceProps> = () => {
    // Implement your component logic here

    return (
        <Card sx={{
            margin: 10,
            padding: 6,
        }}>
            <CardContent sx={{
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}>
                <Typography variant='h3' paddingBottom={2}>Lead Mobile and FullStack Developer</Typography>
                <ul>
                    <li>Lead architecture, design, and development, of a Flutter-based mobile application deployed to Android and iOS</li>
                    <li>Integrated into Aruba IoT to dynamically track phones across WLAN for the purposes of locating 911 calls</li>
                    <li>Lead developers in high stress scenarios to provide necessary hotfixes on day-of-discovery for website vulnerabilities</li>
                    <li>Designed CI/CD for deployment of mobile apps to both testers, and app stores, using Firebase and AWS CodeStar</li>
                </ul>
                <Typography variant='h4' paddingBottom={4}>911inform</Typography>
                <Typography variant='body1' textAlign={'left'} paddingBottom={4}>
                    Welcome to my personal website. My name is John Cinquegrana, and I am a dedicated software engineer from Hazlet, NJ, currently residing in Orange, NJ, just within the NYC metro area.
                </Typography>
                <Typography variant='body1' textAlign={'left'} paddingBottom={4}>
                    I graduated with a Bachelor's degree in Computer Science from Stevens Institute of Technology, where I honed my skills in software development and cultivated a passion for creating impactful technological solutions. My professional journey has included significant roles at 911inform and Rutgers University. At 911inform, I developed a mobile application from the ground up, integrating IoT solutions to enhance emergency response times. At Rutgers University, I led the development of the MyRutgers mobile application, serving over 100,000 students and faculty members with advanced state management techniques, CI/CD automations, and seamless systems integration. <br />
                </Typography>
                <Typography variant='body1' textAlign={'left'} paddingBottom={4}>
                    Through these experiences, I have built a strong foundation in mobile and full-stack development, continuously driven by a commitment to innovation and excellence. Thank you for visiting my website, and I look forward to connecting with you.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default WorkExperience;