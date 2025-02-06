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
				<motion.p
					key={index}
					className='my-4 w-full h-7 text-sm'
					initial={{
						fontSize: '1.5rem',
						// color: 'hsl(var(--heroui-foreground))',
					}}
					animate={{
						// scale: selectedIndex === index ? 1.5 : 1,
						fontSize: selectedIndex === index ? '3rem' : '1.5rem',
						color:
							selectedIndex === index ? primary600 : foreground,
						fontWeight: selectedIndex === index ? 'bold' : 'normal',
						// style: {
						// 	color:
						// 		selectedIndex === index
						// 			? 'hsl(var(--heroui-primary-600))'
						// 			: 'hsl(var(--heroui-foreground))',
						// },
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
			))}
		</>
	);
};

export default GrowShowcase;
