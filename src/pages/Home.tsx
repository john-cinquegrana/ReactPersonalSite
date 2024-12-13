import { Card, CardBody, Spacer } from '@nextui-org/react';
import React from 'react';

const Home: React.FC = () => {
	return (
		<div className='px-8 flex flex-col justify-start content-stretch'>
			<Card className='bg-primary-100 text-center rounded-t-none h-64'>
				<CardBody className='flex flex-col justify-end content-center'>
					<h1 className='text-8xl bg-transparent p-8 text-primary-900 text-center'>
						John Cinquegrana
					</h1>
				</CardBody>
			</Card>
			<Card className='my-16'>
				<CardBody className='flex flex-row justify-around content-stretch py-8 px-12 text-left'>
					<div className='flex flex-col justify-around content-stretch mx-4 h-full'>
						<p className='text-2xl text-primary-900 w-full my-4'>
							Mobile Developer
						</p>
						<p className='text-2xl text-primary-900 w-full my-4'>
							Team Leader
						</p>
						<p className='text-2xl text-primary-900 w-full my-4'>
							DevOps Engineer
						</p>
						<p className='text-2xl text-primary-900 w-full my-4'>
							AI/ML Engineer
						</p>
						<p className='text-5xl text-primary-800 font-bold w-full my-4'>
							UI/UX Designer
						</p>
						<p className='text-2xl text-primary-900 w-full my-4'>
							Full Stack Developer
						</p>
					</div>
					<div className='flex flex-col justify-between content-stretch mx-4 max-w-2xl'>
						<h2 className='text-7xl text-primary-900'>
							Roles and Toils
						</h2>
						<div className='indent-8'>
							<p className='text-lg text-primary-900'>
								When working in this industry, you have to wear
								a lot of hats. When I began in the programming
								industry I was nothing but a Full Stack
								Developer. As I moved forward in my career I was
								given more and more opportunity, and
								responsiblity, to improve. I have worked in a
								variety of industries and have learned a lot
								along the way. I am always looking to learn more
								and expand my skill set.
							</p>
							<Spacer y={3} />
							<p className='text-lg text-primary-900'>
								Today working as a lead Mobile Developer, I have
								to be able to easily step into any of these
								roles at a moments notice. From creating new
								servers and databases, to making painless
								integrated environments for my team members to
								develop in, whatever creates the best experience
								possible is what I am doing.
							</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default Home;
