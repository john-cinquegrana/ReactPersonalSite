import { motion } from 'motion/react';
import { useRef } from 'react';
import useFollowPointer from '../hooks/useFollowPointer';

export default function Drag() {
	const ref = useRef<HTMLDivElement>(null);
	const { x, y } = useFollowPointer(ref);

	// console.log('x', x.get(), 'y', y.get());

	return (
		<motion.div
			id='drag'
			ref={ref}
			style={{ ...ball, x, y, position: 'fixed', pointerEvents: 'none' }}
		/>
	);
}

/**
 * ==============   Styles   ================
 */

const ball = {
	width: 100,
	height: 100,
	backgroundColor: '#ff0088',
	borderRadius: '50%',
};
