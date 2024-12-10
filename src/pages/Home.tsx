import { Card, CardBody } from '@nextui-org/react';
import React from 'react';

const Home: React.FC = () => {
	return (
		<div className='px-8'>
			<Card className='bg-primary-100 text-center mx-8 rounded-t-none h-64'>
				<CardBody className='flex flex-col justify-end align-middle'>
					<h1 className='text-7xl bg-transparent p-8 text-primary-900 text-center'>
						John Cinquegrana
					</h1>
				</CardBody>
			</Card>
		</div>
	);
};

export default Home;
