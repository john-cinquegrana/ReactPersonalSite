import { Button, Spacer } from '@heroui/react';
import { BodyMedium, DisplayMedium } from './Typography';
import { FaGithub, FaRegCopy } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import CopyButton from './CopyButton';
import { FunctionComponent } from 'react';

function NameHeader() {
	return (
		<div className='flex flex-col items-center bg-secondary-500 text-secondary-50'>
			<Spacer className='h-16 lg:h-32' />
			<div className='flex flex-col-reverse lg:flex-row justify-between items-center lg:items-stretch'>
				{/* The div full of copy buttons */}
				<ButtonColumn />
				<Spacer className='h-10  lg:hidden' />
				<div className='flex flex-col justify-end items-center lg:items-start max-w-[50%]'>
					<DisplayMedium className='text-center'>
						John Cinquegrana
					</DisplayMedium>
					<Spacer y={8} />
					<BodyMedium className='text-center lg:text-left'>
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

const ButtonColumn: FunctionComponent = () => {
	return (
		<>
			<div className='hidden lg:flex flex-col justify-end items-center lg:p-2'>
				<CopyButton
					className='m-2 bg-background w-40 '
					color='primary'
					variant='flat'
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
						navigator.clipboard.writeText('alllegron@gmail.com');
					}}
					slideoutContent={
						<BodyMedium>alllegron@gmail.com</BodyMedium>
					}
				>
					<p>Email Me</p>
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
			<div className='flex lg:hidden flex-col justify-end items-center p-8'>
				<div className='flex flex-row justify-between items-center'>
					<Button
						className='m-2 bg-background w-40 flex-1'
						color='primary'
						variant='flat'
						endContent={<FaGithub />}
						onPress={() => {
							window.open(
								'https://github.com/john-cinquegrana',
								'_blank',
							);
						}}
					>
						<p>Github Page</p>
					</Button>
					<Button
						className='m-2 bg-default-50 w-40 text-primary-500 flex-1'
						color='primary'
						variant='faded'
						endContent={<FaRegCopy />}
						onPress={() => {
							navigator.clipboard.writeText(
								'https://github.com/john-cinquegrana',
							);
						}}
					>
						<p>Copy Github URL</p>
					</Button>
				</div>
				<div className='flex flex-row justify-between items-center'>
					<Button
						className='m-2 bg-background w-40 flex-1'
						color='primary'
						variant='flat'
						endContent={<MdEmail />}
						onPress={() => {
							window.location.href = 'mailto:alllegron@gmail.com';
						}}
					>
						<p>Email Me</p>
					</Button>
					<Button
						className='m-2 bg-default-50 w-40 text-primary-500 flex-1'
						color='primary'
						variant='faded'
						endContent={<FaRegCopy />}
						onPress={() => {
							navigator.clipboard.writeText(
								'alllegron@gmail.com',
							);
						}}
					>
						<p>Copy Email</p>
					</Button>
				</div>
				<div className='flex flex-row justify-between items-center'>
					<Button
						className='m-2 bg-background w-40 flex-1'
						color='primary'
						variant='flat'
						endContent={<HiDevicePhoneMobile />}
						onPress={() => {
							window.location.href = 'tel:7327203916';
						}}
					>
						<p>Call Me</p>
					</Button>
					<Button
						className='m-2 bg-default-50 w-40 text-primary-500 flex-1'
						color='primary'
						variant='faded'
						endContent={<FaRegCopy />}
						onPress={() => {
							navigator.clipboard.writeText('+17327203916');
						}}
					>
						<p>Copy Number</p>
					</Button>
				</div>
			</div>
		</>
	);
};
