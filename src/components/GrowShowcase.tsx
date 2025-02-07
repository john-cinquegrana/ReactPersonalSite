import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { semanticColors } from '@heroui/react';

interface GrowShowcaseProps {
	items: string[];
}

const GrowShowcase: React.FC<GrowShowcaseProps> = ({ items }) => {
	// Grab the necessary animated values from the theme
	const primary600 = semanticColors.dark.primary[600];
	// @ts-expect-error HeroUI typed ColorScale
	const foreground: string = semanticColors.dark.foreground.DEFAULT;

	/* Code for animating between randomly selected values */

	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	useEffect(() => {
		let previousIndex: number | null = null;
		const interval = setInterval(() => {
			let randomIndex;
			do {
				randomIndex = Math.floor(Math.random() * items.length);
			} while (randomIndex === previousIndex);
			setSelectedIndex(randomIndex);
			previousIndex = randomIndex;
			// console.log(`Selected random index ${randomIndex}`);
		}, 4000);

		return () => clearInterval(interval);
	}, [items.length]);

	// console.log('Building Showcase.');

	return (
		<>
			{items.map((item, index) => (
				<div
					key={index}
					className='my-4 h-7 w-full'
				>
					<motion.p
						className='my-4 max-w-[50%] left-0 ss:text-xs sm:text-xs md:text-sm xl:text-3xl 2xl:text-4xl 3xl:text-5xl line-clamp-1'
						initial={
							{
								// fontSize: '1.5rem',
								// color: 'hsl(var(--heroui-foreground))',
							}
						}
						animate={{
							scale: selectedIndex === index ? 1.5 : 1,
							// fontSize:
							// 	selectedIndex === index ? '3rem' : '1.5rem',
							color:
								selectedIndex === index
									? primary600
									: foreground,
							fontWeight:
								selectedIndex === index ? 'bold' : 'normal',
							transformOrigin: 'left',
						}}
						transition={{
							type: 'tween',
							duration: 0.75,
							// color: { duration: 0.75, type: 'tween' },
							ease: 'easeInOut',
						}}
					>
						{item}
					</motion.p>
				</div>
			))}
		</>
	);
};

export default GrowShowcase;
