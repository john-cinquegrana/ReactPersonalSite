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
	// Float value is percentage of normal scroll speed. Lower number is bigger offset from 1 and
	// therefore slower scroll
	const wyeScroll = useParallax(scrollY, 0.9);
	const triangleScroll = useParallax(scrollY, 0.85);
	const blobScroll = useParallax(scrollY, 0.8);

	return (
		<div className='w-full h-full relative overflow-hidden'>
			<motion.img
				src={wyeScatter}
				style={{
					y: wyeScroll,
				}}
				className='w-full h-full min-h-full absolute object-cover overflow-visible'
			/>
			<motion.img
				src={triangleScatter}
				style={{
					// top: triangleScroll,
					y: triangleScroll,
				}}
				className='w-full h-full min-h-full absolute object-cover overflow-visible'
			/>
			<motion.img
				src={blobScatter}
				style={{
					y: blobScroll,
				}}
				className='w-full h-full min-h-full absolute object-cover overflow-visible'
			/>
			<div
				className='flex flex-col items-center  w-full'
				style={{ position: 'relative' }}
				{...divProps}
			>
				{children}
			</div>
		</div>
	);
};

export default ParallaxBackground;
