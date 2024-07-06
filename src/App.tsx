import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import Home from './components/pages/Home';
import { lightTheme } from './components/theme';

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			<Home />
		</ThemeProvider>
	);
}

export default App;
