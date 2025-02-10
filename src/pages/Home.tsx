import React from 'react';

import Container from '../components/Container';
import ParallaxBackground from '../components/ParallaxBackground';
import NameHeader from '../components/NameHeader';
import GlassCard from '../components/GlassCard';
import { CardBody, Spacer } from '@heroui/react';
import GrowShowcase from '../components/GrowShowcase';
import { BodyMedium, HeadlineMedium } from '../components/Typography';

const Home: React.FC = () => {
	return (
		<div
			id='Content'
			className='flex flex-col justify-start content-stretch w-full'
		>
			<NameHeader />
			<ParallaxBackground>
				<Container className='flex flex-col justify-start content-stretch px-10'>
					<RolesCard />
					<ProductsCard />
					<TechnologiesCard />
				</Container>
			</ParallaxBackground>
		</div>
	);
};

export default Home;

/* Simple Components for isolating home cards */
function RolesCard() {
	return (
		<GlassCard className='my-16 w-full'>
			<CardBody className='flex flex-row justify-around content-stretch py-8 px-12 text-left'>
				<div className='flex flex-col justify-around items-start mx-4 h-full w-1/2'>
					<GrowShowcase
						items={[
							'Mobile Developer',
							'Team Leader',
							'DevOps Engineer',
							'AI/ML Engineer',
							'UI/UX Designer',
							'Full Stack Developer',
						]}
					/>
				</div>
				<div className='flex flex-col justify-between content-stretch mx-4 max-w-[50%]'>
					<HeadlineMedium className=''>
						Roles and Toils
					</HeadlineMedium>
					<div className='indent-8'>
						<BodyMedium className='text-lg'>
							When working in this industry, you have to wear a
							lot of hats. When I began in the programming
							industry I was nothing but a Full Stack Developer.
							As I moved forward in my career I was given more and
							more opportunity, and responsiblity, to improve. I
							have worked in a variety of industries and have
							learned a lot along the way. I am always looking to
							learn more and expand my skill set.
						</BodyMedium>
						<Spacer y={3} />
						<BodyMedium className='text-lg'>
							Today working as a lead Mobile Developer, I have to
							be able to easily step into any of these roles at a
							moments notice. From creating new servers and
							databases, to making painless integrated
							environments for my team members to develop in,
							whatever creates the best experience possible is
							what I am doing.
						</BodyMedium>
					</div>
				</div>
			</CardBody>
		</GlassCard>
	);
}

function ProductsCard() {
	return (
		<GlassCard className='my-16 w-full'>
			<CardBody>
				<div className='flex flex-col items-stretch'>
					<HeadlineMedium className='text-7xl text-center'>
						Products
					</HeadlineMedium>
					<div className='flex flex-row justify-stretch my-8'>
						<div className='flex flex-1 flex-col items-stretch mx-8'>
							<div className='flex flex-row justify-evenly items-center my-4'>
								<img
									src='https://inform.911inform.com/wp-content/uploads/2020/03/footer_logo-min.png'
									alt='Product 4'
									className='h-auto w-auto max-h-24 max-w-24'
								/>
								<img
									src='https://911inform.com/images/911inform.jpg'
									alt='Product 5'
									className='h-auto w-auto max-h-24 max-w-24'
								/>
							</div>
							<BodyMedium className='text-lg my-2'>
								911inform is an Emergency Management Solution
								that exists as both a mobile app and a web app.
								I started at 911inform as a{' '}
								<b>Full Stack Developer</b>. As I progressed
								through the company, I was given more and more
								high-profile tasks. I redesigned the algorithm
								for mapping GPS coordinates to our maps, helped
								created a Selenium-based testing suite, created
								an IOT system for tracking moving 911 callers,
								and founded a UI/UX design team. Eventually I
								was given lead of the effort to create a new
								Mobile Application. Nearly one year later, that
								app had been completed.
							</BodyMedium>
						</div>
						<div className='flex flex-1 flex-col items-stretch mx-8'>
							<div className='flex flex-row justify-evenly items-center my-4'>
								<img
									src='https://my.rutgers.edu/uxp/static/media/rutgers-shield-logo-new.436fc289.svg'
									alt='myRutgers shield logo'
									className='h-auto w-auto max-h-24 max-w-24'
								/>
								<img
									src='https://my.rutgers.edu/uxp/assets/images/my-rutgers-logo-light-new.png'
									alt='myRutgers light logo'
									className='h-auto w-auto max-h-24 max-w-24'
								/>
							</div>
							<BodyMedium className='text-lg my-2'>
								Rutgers is the State University of New Jersey,
								known for its diverse academic programs and
								research initiatives. The myRutgers portal is a
								comprehensive web and mobile platform designed
								to provide students, faculty, and staff with
								easy access to university resources, services,
								and information. Upon joining the team, I was
								given position as <b>Lead Mobile Developer</b>,
								and took charge of the initial release of the
								myRutgers mobile app. Starting from nothing, it
								now offers features such as course registration,
								grade tracking, campus news, and personalized
								notifications.
							</BodyMedium>
						</div>
					</div>
				</div>
			</CardBody>
		</GlassCard>
	);
}

function TechnologiesCard() {
	return (
		<GlassCard className='my-16 w-full'>
			<CardBody>
				<div className='flex flex-col items-stretch'>
					<HeadlineMedium className='text-7xl text-center'>
						Technologies
					</HeadlineMedium>
					<div className='flex flex-row justify-between content-center my-8'>
						<div className='w-1/3'>
							<img
								src='https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg'
								alt='Flutter Logo'
								className='h-full w-auto max-h-24 max-w-24 mx-auto'
							/>
						</div>
						<div className='w-2/3 flex flex-row items-center'>
							<BodyMedium>
								I love Flutter it's the dirty best. It's so good
								you should use it.
							</BodyMedium>
						</div>
					</div>
					<div className='flex flex-row justify-between content-center my-8'>
						<div className='w-1/3'>
							<img
								src='/src/assets/firebase_logomark.svg'
								alt='Firebase Logo'
								className='h-full w-auto max-h-24 max-w-24 mx-auto'
							/>
						</div>
						<div className='w-2/3 flex flex-row items-center'>
							<BodyMedium>
								Firebase is a wonderful tool that many people
								love, and even more will learn to use.
							</BodyMedium>
						</div>
					</div>
					<div className='flex flex-row justify-between content-center my-8'>
						<div className='w-1/3'>
							<img
								src='/src/assets/aws-color.svg'
								alt='Flutter Logo'
								className='h-full w-auto max-h-24 max-w-24 mx-auto'
							/>
						</div>
						<div className='w-2/3 flex flex-row items-center'>
							<BodyMedium>
								Firebase is a wonderful tool that many people
								love, and even more will learn to use.
							</BodyMedium>
						</div>
					</div>
				</div>
			</CardBody>
		</GlassCard>
	);
}
