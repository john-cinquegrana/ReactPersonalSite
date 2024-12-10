import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import '@root/App.css';
import Home from '@pages/Home';
import { NextUIProvider } from '@nextui-org/react';

function App() {
	return (
		<NextUIProvider>
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
		</NextUIProvider>
	);
}

function Layout() {
	return <Outlet />;
}

export default App;
