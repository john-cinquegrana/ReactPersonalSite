import { frame, useMotionValue, useSpring } from 'motion/react';
import { RefObject, useEffect } from 'react';

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

let mouseX: number;
let mouseY: number;

export default function useFollowPointer(
	ref: RefObject<HTMLDivElement | null>,
) {
	const xPoint = useMotionValue(0);
	const yPoint = useMotionValue(0);
	const x = useSpring(xPoint, spring);
	const y = useSpring(yPoint, spring);

	useEffect(() => {
		if (!ref.current) return;

		// ref.current.parentElement!.

		const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
			// console.log('move');
			const element = ref.current!;

			mouseX = clientX;
			mouseY = clientY;

			frame.read(() => {
				xPoint.set(
					mouseX -
						// element.offsetLeft -
						element.offsetWidth / 2 +
						window.scrollX,
				);
				yPoint.set(
					mouseY -
						// element.offsetTop -
						element.offsetHeight / 2 +
						window.scrollY,
				);
			});
		};

		const handleScroll = () => {
			const element = ref.current!;

			// Get the parent coordinates to compare to since we are assuming
			// absolute positioning
			// const parentElement = element.parentElement!;
			// const parentLeft = parentElement.offsetLeft;
			// const parentTop = parentElement.offsetTop;

			const scrollX = window.scrollX;
			const scrollY = window.scrollY;

			frame.read(() => {
				xPoint.set(
					mouseX -
						element.offsetLeft -
						element.offsetWidth / 2 +
						scrollX,
				);
				yPoint.set(
					mouseY -
						element.offsetTop -
						element.offsetHeight / 2 +
						scrollY,
				);
			});
		};

		window.addEventListener('pointermove', handlePointerMove);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('pointermove', handlePointerMove);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [ref, xPoint, yPoint]);

	return { x, y };
}
