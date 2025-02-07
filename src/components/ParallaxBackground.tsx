import React, { ReactNode } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import wyeScatter from '../assets/wye-scatter.svg';
import blobScatter from '../assets/blob-scatter.svg';
import triangleScatter from '../assets/triangle-scatter.svg';

interface ParallaxBackgroundProps extends React.HTMLProps<HTMLDivElement> {
	children: ReactNode;
}

/**
 * @param value The scroll value that is being used to calculate the parallax
 * @param scale The multiplier for the scroll speed. 1 is same speed as
 * content, 0.5 would be 50% relative scroll speed.
 * @returns A MotionValue containing the appropriate scroll value
 */
function useParallax(value: MotionValue<number>, scale: number) {
	if (scale < 0 || scale > 1) {
		throw new Error('Scale must be between 0 and 1');
	}
	return useTransform(value, (value) => value * (1 - scale));
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
	children,
	...divProps
}) => {
	const { scrollY } = useScroll();
	// Float value is offset from normal scroll speed. Bigger number is bigger offset and
	// therefore slower scroll
	const wyeScroll = useParallax(scrollY, 0.75);
	const triangleScroll = useParallax(scrollY, 0.83);
	const blobScroll = useParallax(scrollY, 0.9);

	return (
		<div
			className='w-full h-full relative overflow-hidden'
			{...divProps}
		>
			<motion.img
				src={wyeScatter}
				style={{
					y: wyeScroll,
				}}
				className='w-full h-full min-h-full absolute object-cover'
			/>
			<motion.img
				src={triangleScatter}
				style={{
					y: triangleScroll,
				}}
				className='w-full h-full min-h-full absolute object-cover'
			/>
			<motion.img
				src={blobScatter}
				style={{
					y: blobScroll,
				}}
				className='w-full h-full min-h-full absolute object-cover'
			/>
			<div
				className='flex flex-col items-center  w-full'
				style={{ position: 'relative' }}
			>
				{children}
			</div>
		</div>
	);
};

export default ParallaxBackground;
