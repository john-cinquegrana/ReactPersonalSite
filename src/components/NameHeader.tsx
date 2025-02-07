import { CardBody } from '@heroui/react';
import GlassCard from './GlassCard';

function NameHeader() {
	return (
		<GlassCard className='bg-primary-400 text-default-900 text-center my-16 py-8'>
			<CardBody className='flex flex-col justify-end content-center'>
				<h1 className='text-8xl bg-transparent p-8 text-center'>
					John Cinquegrana
				</h1>
			</CardBody>
		</GlassCard>
	);
}

export default NameHeader;
