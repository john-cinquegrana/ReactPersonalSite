import { useState, useEffect } from 'react';

export enum Breakpoint {
	Z = 0,
	SS = 200,
	XS = 480,
	SM = 640,
	MD = 768,
	LG = 1024,
	XL = 1280,
	XXL = 1536,
	XXXL = 1920,
}

const getBreakpoint = (width: number): Breakpoint => {
	if (width >= Breakpoint.XXXL) return Breakpoint.XXXL;
	if (width >= Breakpoint.XXL) return Breakpoint.XXL;
	if (width >= Breakpoint.XL) return Breakpoint.XL;
	if (width >= Breakpoint.LG) return Breakpoint.LG;
	if (width >= Breakpoint.MD) return Breakpoint.MD;
	if (width >= Breakpoint.SM) return Breakpoint.SM;
	if (width >= Breakpoint.XS) return Breakpoint.XS;
	if (width >= Breakpoint.SS) return Breakpoint.SS;
	return Breakpoint.Z;
};

const useBreakpoints = (): Breakpoint => {
	const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
		getBreakpoint(window.innerWidth),
	);

	useEffect(() => {
		const handleResize = () => {
			setBreakpoint(getBreakpoint(window.innerWidth));
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return breakpoint;
};

export default useBreakpoints;
