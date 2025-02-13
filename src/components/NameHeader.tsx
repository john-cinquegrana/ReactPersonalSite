import { Button, Spacer } from '@heroui/react';
import { BodyMedium, BodySmall, DisplayMedium } from './Typography';
import { FaGithub, FaRegCopy } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import CopyButton from './CopyButton';
import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

function NameHeader() {
	return (
		<div className='flex flex-col items-center bg-secondary-500 text-secondary-50 overflow-hidden'>
			<Spacer className='h-16 lg:h-32' />
			<div className='flex flex-col-reverse lg:flex-row justify-around items-center lg:items-stretch'>
				{/* The div full of copy buttons */}
				<ButtonColumn />
				<Spacer className='h-10  lg:hidden' />
				<motion.div
					className='px-4 flex flex-col justify-end items-center lg:items-start lg:max-w-[50%] relative'
					initial={{ opacity: 0, right: 300 }}
					animate={{ opacity: 1, right: 0 }}
					transition={{
						duration: 0.5,
						type: 'spring',
						stiffness: 300,
					}}
				>
					<DisplayMedium className='text-center'>
						John Cinquegrana
					</DisplayMedium>
					<Spacer y={8} />
					<BodyMedium className='text-center lg:text-left max-w-full font-semibold'>
						Hello hello! I am a full-stack developer making mobile
						and web apps. I enjoy long walks on the mountaintops,
						and swinging through the concrete jungle of New York
						City. If you have any reccomendations of where to get a
						good hot chocolate, please let me know.
					</BodyMedium>
				</motion.div>
			</div>
			{/* <Spacer y={32} /> */}
		</div>
	);
}

export default NameHeader;

const ButtonColumn: FunctionComponent = () => {
	return (
		<>
			<div className='hidden lg:flex flex-col justify-end items-start lg:p-2'>
				<motion.div
					className='relative'
					initial={{ opacity: 0, right: 200 }}
					animate={{ opacity: 1, right: 0 }}
					transition={{
						duration: 0.3,
						type: 'spring',
						stiffness: 200,
						delay: 0.15,
					}}
				>
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
							<BodySmall>github.com/john-cinquegrana</BodySmall>
						}
					>
						<BodySmall>Github Page</BodySmall>
					</CopyButton>
				</motion.div>
				<motion.div
					className='relative'
					initial={{ opacity: 0, right: 200 }}
					animate={{ opacity: 1, right: 0 }}
					transition={{
						duration: 0.3,
						type: 'spring',
						stiffness: 200,
						delay: 0.25,
					}}
				>
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
							<BodySmall>alllegron@gmail.com</BodySmall>
						}
					>
						<BodySmall>Email Me</BodySmall>
					</CopyButton>
				</motion.div>
				<motion.div
					className='relative'
					initial={{ opacity: 0, right: 200 }}
					animate={{ opacity: 1, right: 0 }}
					transition={{
						duration: 0.3,
						type: 'spring',
						stiffness: 200,
						delay: 0.35,
					}}
				>
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
							<BodySmall>+1 (732) 720 - 3916</BodySmall>
						}
					>
						<BodySmall>Call Me</BodySmall>
					</CopyButton>
				</motion.div>
			</div>
			<div className='flex lg:hidden flex-col justify-end items-center p-8'>
				<motion.div
					className='flex flex-row justify-between items-center relative'
					initial={{ opacity: 0, right: 200 }}
					animate={{ opacity: 1, right: 0 }}
					transition={{
						duration: 0.3,
						type: 'spring',
						stiffness: 150,
						delay: 0.15,
					}}
				>
					<Button
						className='m-2 bg-background w-32 md:w-56'
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
						<BodySmall>Github Page</BodySmall>
					</Button>
					<Button
						className='m-2 bg-default-50 w-24 md:w-48 text-primary-500'
						color='primary'
						variant='faded'
						endContent={<FaRegCopy />}
						onPress={() => {
							navigator.clipboard.writeText(
								'https://github.com/john-cinquegrana',
							);
						}}
					>
						<BodySmall className='hidden md:block'>
							Copy Github URL
						</BodySmall>
						<BodySmall className='block md:hidden'>Copy</BodySmall>
					</Button>
				</motion.div>
				<motion.div
					className='flex flex-row justify-between items-center relative'
					initial={{ opacity: 0, right: 200 }}
					animate={{ opacity: 1, right: 0 }}
					transition={{
						duration: 0.3,
						type: 'spring',
						stiffness: 150,
						delay: 0.25,
					}}
				>
					<Button
						className='m-2 bg-background w-32 md:w-56'
						color='primary'
						variant='flat'
						endContent={<MdEmail />}
						onPress={() => {
							window.location.href = 'mailto:alllegron@gmail.com';
						}}
					>
						<BodySmall>Email Me</BodySmall>
					</Button>
					<Button
						className='m-2 bg-default-50 w-24 md:w-48 text-primary-500'
						color='primary'
						variant='faded'
						endContent={<FaRegCopy />}
						onPress={() => {
							navigator.clipboard.writeText(
								'alllegron@gmail.com',
							);
						}}
					>
						<BodySmall className='hidden md:block'>
							Copy Email
						</BodySmall>
						<BodySmall className='block md:hidden'>Copy</BodySmall>
					</Button>
				</motion.div>
				<motion.div
					className='flex flex-row justify-between items-center relative'
					initial={{ opacity: 0, right: 200 }}
					animate={{ opacity: 1, right: 0 }}
					transition={{
						duration: 0.3,
						type: 'spring',
						stiffness: 150,
						delay: 0.35,
					}}
				>
					<Button
						className='m-2 bg-background w-32 md:w-56'
						color='primary'
						variant='flat'
						endContent={<HiDevicePhoneMobile />}
						onPress={() => {
							window.location.href = 'tel:7327203916';
						}}
					>
						<BodySmall>Call Me</BodySmall>
					</Button>
					<Button
						className='m-2 bg-default-50 w-24 md:w-48 text-primary-500'
						color='primary'
						variant='faded'
						endContent={<FaRegCopy />}
						onPress={() => {
							navigator.clipboard.writeText('+17327203916');
						}}
					>
						<BodySmall className='hidden md:block'>
							Copy Number
						</BodySmall>
						<BodySmall className='block md:hidden'>Copy</BodySmall>
					</Button>
				</motion.div>
			</div>
		</>
	);
};
