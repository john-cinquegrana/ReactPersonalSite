import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { HeroUIProvider } from '@heroui/react';
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HeroUIProvider>
			<main className='dark text-foreground bg-background w-full'>
				<App />
				<Analytics />
			</main>
		</HeroUIProvider>
	</StrictMode>,
);
