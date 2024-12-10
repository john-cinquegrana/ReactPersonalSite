import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import '@root/output.css';
import Home from '@pages/Home';
import { NextUIProvider } from '@nextui-org/react';

function App() {
	return (
		<NextUIProvider>
			<main className='dark text-foreground bg-background'>
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
			</main>
		</NextUIProvider>
	);
}

function Layout() {
	return <Outlet />;
}

export default App;
