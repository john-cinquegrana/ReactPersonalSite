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

		window.addEventListener('pointermove', handlePointerMove);

		return () =>
			window.removeEventListener('pointermove', handlePointerMove);
	}, [ref, xPoint, yPoint]);

	return { x, y };
}
