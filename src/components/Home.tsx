import React from 'react';
import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import MainHeader from './MainHeader';
import Box from '@mui/material/Box';


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