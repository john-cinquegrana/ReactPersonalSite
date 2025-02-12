import React from 'react';

import Container from '../components/Container';
import ParallaxBackground from '../components/ParallaxBackground';
import NameHeader from '../components/NameHeader';
import GlassCard from '../components/GlassCard';
import { CardBody, Spacer } from '@heroui/react';
import GrowShowcase from '../components/GrowShowcase';
import { BodyMedium, HeadlineMedium } from '../components/Typography';
import LayeredWaves from '../assets/layers.svg';
import myRutgers from '../assets/myRUTGERS_H_RED_WHITE_RGB.svg';
import firebase from '../assets/firebase_logomark.svg';
import aws from '../assets/aws-color.svg';

const Home: React.FC = () => {
	return (
		<div
			id='Content'
			className='flex flex-col justify-start content-stretch w-full'
		>
			<NameHeader />
			<ParallaxBackground>
				<img
					src={LayeredWaves}
					alt='Layered Waves'
					className='w-full'
				/>
				<Container className='flex flex-col justify-start content-stretch px-2 md:px-10'>
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
		<GlassCard className='my-3 md:w-full items-center'>
			<CardBody className='flex flex-col-reverse lg:flex-row justify-around items-start text-left mx-4'>
				<div className='hidden md:flex flex-col flex-wrap justify-around items-start  max-h-40 w-full lg:h-full'>
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
				<div className='flex flex-col justify-around content-stretch lg:max-w-[50%]'>
					<HeadlineMedium className='text-center py-4'>
						Roles and Developments
					</HeadlineMedium>
					<div className='indent-8 py-4'>
						<BodyMedium>
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
						<BodyMedium>
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
		<GlassCard className='my-3 md:w-full items-center'>
			<CardBody className='mx-4'>
				<div className='flex flex-col items-stretch'>
					<HeadlineMedium className=' text-center'>
						Products
					</HeadlineMedium>
					<div className='flex flex-col md:flex-row justify-stretch my-8'>
						<div className='flex flex-1 flex-col items-stretch'>
							<img
								src='https://inform.911inform.com/wp-content/uploads/2020/03/footer_logo-min.png'
								alt='Product 4'
								className='w-auto h-12 md:h-16 m-4 fit object-contain'
							/>
							<BodyMedium className='my-2'>
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
						<Spacer
							y={12}
							className='md:hidden'
						/>
						<div className='flex flex-1 flex-col items-stretch'>
							<img
								src={myRutgers}
								alt='myRutgers shield logo'
								className='w-auto h-12 md:h-16 m-4 fit object-contain'
							/>

							<BodyMedium className='my-2'>
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
		<GlassCard className='my-3 md:w-full items-center'>
			<CardBody className='mx-4'>
				<div className='flex flex-col items-stretch'>
					<HeadlineMedium className='text-center'>
						Technologies
					</HeadlineMedium>
					<Spacer y={4} />
					<div className='flex flex-col justify-center items-center w-full'>
						<BodyMedium className='text-center max-w-4xl'>
							Technology is the life blood of any engineer or
							programmer. I have spent the majority of my life
							working with different technologies. These are some
							of my absolute favorites.
						</BodyMedium>
					</div>
					<Spacer className='h-4 md:h-12' />
					<div className='flex flex-col md:flex-row justify-between content-center my-5 md:my-8'>
						<div className='my-6 md:w-1/3 flex flex-col justify-center content-center'>
							<img
								src='https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg'
								alt='Flutter Logo'
								className='h-full w-auto max-h-24 max-w-24 mx-auto'
							/>
						</div>
						<div className='md:w-2/3 flex flex-row items-center'>
							<BodyMedium>
								Flutter is the pinnacle of all the frontend
								frameworks I have tried. It's constraint system
								is ingenious compared to other frameworks. It
								comes with a full comoponent library, theming
								system, and state management right out of the
								box. Of everything I have tried, Flutter is my
								choice when I need good products done quickly.
								If only they'd improve the SEO...
							</BodyMedium>
						</div>
					</div>
					<div className='flex flex-col md:flex-row justify-between content-center my-5 md:my-8'>
						<div className='my-6 md:w-1/3 flex flex-col justify-center content-center'>
							<img
								src={firebase}
								alt='Firebase Logo'
								className='h-full w-auto max-h-24 max-w-24 mx-auto'
							/>
						</div>
						<div className='md:w-2/3 flex flex-row items-center'>
							<BodyMedium>
								Firebase is a the first cloud provider that
								follows the Google learning trend. Easy to use
								but difficult to master. It starts simple, but
								can ease you into the entire Google Cloud
								Platform if you let it. I believe Firebase is
								the perfect compromise for developers that need
								reliable services from a top-company, but
								haven't dove into the Cloud Infrastructure world
								yet and want to learn while they create.
							</BodyMedium>
						</div>
					</div>
					<div className='flex flex-col md:flex-row justify-between content-center my-5 md:my-8'>
						<div className='my-6 md:w-1/3 flex flex-col justify-center content-center'>
							<img
								src={aws}
								alt='AWS Logo'
								className='h-full w-auto max-h-24 max-w-24 mx-auto'
							/>
						</div>
						<div className='md:w-2/3 flex flex-row items-center'>
							<BodyMedium>
								AWS is the standard for a reason. From Cloud
								Functions to database hosting to app depoyment
								and CI/CD, there is nothing you cannot do on
								AWS. That's not to say it's easy, I've spent
								hours honing in on the correct IAM permissions
								in CloudFormation templates, or wondering why my
								Python cloud functions were too slow (I included
								the entire AWS boto3 library twice). However, if
								you need something hosted, and you need it to be
								dependable and scallable, there's no one better
								than AWS.
							</BodyMedium>
						</div>
					</div>
				</div>
			</CardBody>
		</GlassCard>
	);
}
