import { Button, Spacer } from '@heroui/react';
import { BodyMedium, DisplayMedium } from './Typography';

function NameHeader() {
	return (
		<div className='flex flex-col items-center bg-secondary-500 text-secondary-50'>
			<Spacer y={32} />
			<div className='flex flex-row justify-around items-center'>
				<div className='flex flex-col justify-end items-start max-w-[50%] overflow-visible'>
					<div className='flex flex-col justify-end relative top-20 overflow-visible z-10'>
						<Button
							color='primary'
							variant='flat'
							className='m-2 bg-background'
						>
							Contact Me
						</Button>
						<Button
							color='primary'
							variant='flat'
							className='m-2 bg-background'
						>
							My Experience
						</Button>
						<Button
							color='primary'
							variant='flat'
							className='m-2 bg-background'
						>
							My Opinions
						</Button>
					</div>
				</div>
				<div className='flex flex-col justify-end items-start max-w-[50%]'>
					<DisplayMedium className='text-center'>
						John Cinquegrana
					</DisplayMedium>
					<Spacer y={8} />
					<BodyMedium>
						Hello hello! I am a full-stack developer making mobile
						and web apps. I enjoy long walks on the mountaintops,
						and swinging through the concrete jungle of New York
						City. If you have any reccomendations of where to get a
						good hot chocolate, please let me know.
					</BodyMedium>
				</div>
			</div>
			{/* <Spacer y={32} /> */}
		</div>
	);
}

export default NameHeader;
