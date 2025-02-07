import { CardBody } from '@heroui/react';
import GlassCard from './GlassCard';
import saxophone from '../assets/saxophone.svg';
import { BodyMedium, DisplayMedium } from './Typography';

function NameHeader() {
	return (
		<GlassCard className='bg-primary-200 text-default-900 text-center my-16 py-8'>
			<CardBody className='flex flex-row justify-evenly content-center'>
				<img
					src={saxophone}
					alt='saxophone'
					className='max-w-[25%]'
				/>
				<div className='flex flex-col justify-end items-stretch max-w-[50%]'>
					<BodyMedium>
						Hello hello! I am a full-stack developer making mobile
						and web apps. I enjoy long walks on the mountaintops,
						and swinging through the concrete jungle of New York
						City. If you have any reccomendations of where to get a
						good hot chocolate, please let me know.
					</BodyMedium>
					<DisplayMedium className='bg-transparent p-8 text-center'>
						John Cinquegrana
					</DisplayMedium>
				</div>
			</CardBody>
		</GlassCard>
	);
}

export default NameHeader;
