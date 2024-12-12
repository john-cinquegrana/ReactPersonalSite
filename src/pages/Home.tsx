import { Card, CardBody } from '@nextui-org/react';
import React from 'react';

const Home: React.FC = () => {
	return (
		<div className='px-8 flex flex-col justify-start content-stretch'>
			<Card className='bg-primary-100 text-center rounded-t-none h-64'>
				<CardBody className='flex flex-col justify-end content-center'>
					<h1 className='text-7xl bg-transparent p-8 text-primary-900 text-center'>
						John Cinquegrana
					</h1>
				</CardBody>
			</Card>
			<Card className='my-2'>
				<CardBody>
					<h2 className='text-4xl text-primary-900 text-center'>
						Welcome to my personal website!
					</h2>
					<p className='text-lg text-primary-900 text-center'>
						This is a work in progress, but I hope to have some
						content up soon! HMR is a fucking bitch. Hello herro
					</p>
				</CardBody>
			</Card>
		</div>
	);
};

export default Home;
