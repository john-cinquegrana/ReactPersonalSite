import React from 'react';
import tailwindConfig from '../../tailwind.config';

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	// Generate the breakpoints that we need
	let classNames = '';
	// The super small breakpoint is custom since it's too small
	classNames += 'ss:w-[400px] ';
	// Pull all of the breakpoint values out of the
	const breakpoints = tailwindConfig.theme.screens;
	// Get a breakpoint class for each breakpoint declaration except ss.
	const breakClasses = Object.entries(breakpoints)
		.filter(([key]) => key !== 'ss')
		.map(([key, value]) => `${key}:w-[${value}px]`)
		.join(' ');
	// Add the newly created breakpoint classes into the total list
	classNames += breakClasses;

	return <div className={classNames}>{children}</div>;
};

export default Container;
