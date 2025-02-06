import { frame, useMotionValue, useSpring } from 'motion/react';
import { RefObject, useEffect } from 'react';

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

export default function useFollowPointer(
	ref: RefObject<HTMLDivElement | null>,
) {
	const xPoint = useMotionValue(0);
	const yPoint = useMotionValue(0);
	const x = useSpring(xPoint, spring);
	const y = useSpring(yPoint, spring);

	useEffect(() => {
		if (!ref.current) return;

		const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
			console.log('move');
			const element = ref.current!;

			frame.read(() => {
				xPoint.set(
					clientX - element.offsetLeft - element.offsetWidth / 2,
				);
				yPoint.set(
					clientY - element.offsetTop - element.offsetHeight / 2,
				);
			});
		};

		// let lastScrollX = window.scrollX;
		// let lastScrollY = window.scrollY;

		// const handleScroll = () => {
		// 	console.log('scroll');
		// 	// const element = ref.current!;
		// 	// const rect = element.getBoundingClientRect();
		// 	const scrollX = window.scrollX;
		// 	const scrollY = window.scrollY;

		// 	const deltaX = scrollX - lastScrollX;
		// 	const deltaY = scrollY - lastScrollY;

		// 	xPoint.set(xPoint.get() - deltaX);
		// 	yPoint.set(yPoint.get() - deltaY);

		// 	lastScrollX = scrollX;
		// 	lastScrollY = scrollY;
		// };

		window.addEventListener('pointermove', handlePointerMove);
		// window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('pointermove', handlePointerMove);
			// window.removeEventListener('scroll', handleScroll);
		};
	}, [ref, xPoint, yPoint]);

	return { x, y };
}
