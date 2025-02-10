import { Spacer } from '@heroui/react';
import { BodyMedium, DisplayMedium } from './Typography';
import { FaGithub } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import CopyButton from './CopyButton';

function NameHeader() {
	return (
		<div className='flex flex-col items-center bg-secondary-500 text-secondary-50'>
			<Spacer y={32} />
			<div className='flex flex-row justify-around items-stretch'>
				<div className='flex flex-col justify-end'>
					<CopyButton
						color='primary'
						variant='flat'
						className='m-2 bg-background w-40'
						endContent={<FaGithub />}
						onPress={() => {
							window.open(
								'https://github.com/john-cinquegrana',
								'_blank',
							);
						}}
						onClickPress={() => {
							navigator.clipboard.writeText(
								'https://github.com/john-cinquegrana',
							);
						}}
						slideoutContent={
							<BodyMedium>github.com/john-cinquegrana</BodyMedium>
						}
					>
						<p>Github Page</p>
					</CopyButton>
					<CopyButton
						color='primary'
						variant='flat'
						className='m-2 bg-background w-40'
						endContent={<MdEmail />}
						onPress={() => {
							window.location.href = 'mailto:alllegron@gmail.com';
						}}
						onClickPress={() => {
							navigator.clipboard.writeText(
								'alllegron@gmail.com',
							);
						}}
						slideoutContent={
							<BodyMedium>alllegron@gmail.com</BodyMedium>
						}
					>
						Email Me
					</CopyButton>
					<CopyButton
						color='primary'
						variant='flat'
						className='m-2 bg-background w-40'
						endContent={<HiDevicePhoneMobile />}
						onPress={() => {
							window.location.href = 'tel:7327203916';
						}}
						onClickPress={() => {
							navigator.clipboard.writeText('+17327203916');
						}}
						slideoutContent={
							<BodyMedium>+1 (732) 720 - 3916</BodyMedium>
						}
					>
						Call Me
					</CopyButton>
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
