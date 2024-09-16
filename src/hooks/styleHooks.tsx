import { useTheme } from '@mui/material';

import { useMediaQuery } from '@mui/material';

export enum Breakpoint {
	XS = 'xs',
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
	XL = 'xl',
}

export function useBreakpoint() {
	const theme = useTheme();

	let breakpoint: Breakpoint;

	const isExtraSmall = useMediaQuery(theme.breakpoints.up('xs'));
	const isSmall = useMediaQuery(theme.breakpoints.up('sm'));
	const isMedium = useMediaQuery(theme.breakpoints.up('md'));
	const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
	const isExtraLarge = useMediaQuery(theme.breakpoints.up('xl'));

	if (isExtraLarge) {
		breakpoint = Breakpoint.XL;
	} else if (isLarge) {
		breakpoint = Breakpoint.LG;
	} else if (isMedium) {
		breakpoint = Breakpoint.MD;
	} else if (isSmall) {
		breakpoint = Breakpoint.SM;
	} else if (isExtraSmall) {
		breakpoint = Breakpoint.XS;
	} else {
		throw new Error('No breakpoint found');
	}

	return breakpoint;
}
