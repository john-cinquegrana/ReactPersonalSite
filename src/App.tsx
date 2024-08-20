import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import '@root/App.css';
import Home from '@pages/Home';
import { lightTheme } from '@components/theme';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Layout />}
				>
					<Route
						index
						element={<Home />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

function Layout() {
	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			<Outlet />
		</ThemeProvider>
	);
}

export default App;
