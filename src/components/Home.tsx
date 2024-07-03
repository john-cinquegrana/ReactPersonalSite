import React from 'react';
import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import MainHeader from './MainHeader';
import Box from '@mui/material/Box';
import { Card, CardContent, Typography } from '@mui/material';


const Home: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* A full width div to lay out everything in columns underneath it */}
            <Box sx={{
                flexFlow: 'column nowrap',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                width: '100%',
            }} >

                <MainHeader title="John Cinquegrana" />
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
                        <Typography variant='h2' paddingBottom={4}>About Me</Typography>
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
                <Typography variant='h2' padding={4}>Work Experience</Typography>
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
                        <Typography variant='h3' paddingBottom={4}>911inform</Typography>
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
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </Box>
        </>
    );
};

export default Home;