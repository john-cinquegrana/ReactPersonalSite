import React, { ReactNode } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import wyeScatter from '../assets/wye-scatter.svg';
import blobScatter from '../assets/blob-scatter.svg';
import triangleScatter from '../assets/triangle-scatter.svg';

interface ParallaxBackgroundProps extends React.HTMLProps<HTMLDivElement> {
	children: ReactNode;
}

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [distance, -distance]);
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
	children,
	...divProps
}) => {
	const { scrollYProgress } = useScroll();
	const wyeScroll = useParallax(scrollYProgress, 200);
	const blobScroll = useParallax(scrollYProgress, 400);
	const triangleScroll = useParallax(scrollYProgress, 600);

	return (
		<div
			className='parallax-background'
			{...divProps}
			style={{ position: 'relative', overflow: 'hidden' }}
		>
			<motion.img
				src={wyeScatter}
				style={{
					y: wyeScroll,
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
				}}
				className='parallax-layer'
			/>
			<motion.img
				src={blobScatter}
				style={{
					y: blobScroll,
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
				}}
				className='parallax-layer'
			/>
			<motion.img
				src={triangleScatter}
				style={{
					y: triangleScroll,
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
				}}
				className='parallax-layer'
			/>
			<div style={{ position: 'relative' }}>{children}</div>
		</div>
	);
};

export default ParallaxBackground;
