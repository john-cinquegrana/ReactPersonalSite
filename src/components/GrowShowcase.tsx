import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GrowShowcaseProps {
	items: string[];
}

const GrowShowcase: React.FC<GrowShowcaseProps> = ({ items }) => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			const randomIndex = Math.floor(Math.random() * items.length);
			setSelectedIndex(randomIndex);
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
					initial={{ fontSize: '1.5rem' }}
					animate={{
						type: 'spring',
						fontSize: selectedIndex === index ? '3rem' : '1.5rem',
						color:
							selectedIndex === index
								? 'rgb(204,227,253)'
								: 'rgb(230,241,254)',
						fontWeight: selectedIndex === index ? 'bold' : 'normal',
					}}
					transition={{ duration: 0.75 }}
				>
					{item}
				</motion.p>
			))}
		</>
	);
};

export default GrowShowcase;
