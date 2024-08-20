import { CssBaseline, ThemeProvider } from '@mui/material';
import '@root/App.css';
import Home from '@pages/Home';
import { lightTheme } from '@components/theme';

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			<Home />
		</ThemeProvider>
	);
}

export default App;
