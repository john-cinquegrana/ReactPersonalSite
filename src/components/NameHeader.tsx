import { CardBody } from '@heroui/react';
import GlassCard from './GlassCard';
import saxophone from '../assets/saxophone.svg';

function NameHeader() {
	return (
		<GlassCard className='bg-primary-400 text-default-900 text-center my-16 py-8'>
			<CardBody className='flex flex-row justify-evenly content-center'>
				<img
					src={saxophone}
					alt='saxophone'
					className='max-w-[25%]'
				/>
				<div className='flex flex-col justify-end items-stretch max-w-[50%]'>
					<p>
						Hello hello! I am a full-stack developer making mobile
						and web apps. I enjoy long walks on the mountaintops,
						and swinging through the concrete jungle of New York
						City. If you have any reccomendations of where to get a
						good hot chocolate, please let me know.
					</p>
					<h1 className='text-8xl bg-transparent p-8 text-center'>
						John Cinquegrana
					</h1>
				</div>
			</CardBody>
		</GlassCard>
	);
}

export default NameHeader;
