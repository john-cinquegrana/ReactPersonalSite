import React from 'react';

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	/* The weird automatic stuff I tried wasn't working because Tailwind
	was optimizing out the breakpoint classes if no other component used them. */

	// Generate the breakpoints that we need
	// let classNames = '';
	// // The super small breakpoint is custom since it's too small
	// // Pull all of the breakpoint values out of the
	// const breakpoints = tailwindConfig.theme.screens;
	// // Get a breakpoint class for each breakpoint declaration except ss.
	// const breakClasses = Object.entries(breakpoints)
	// 	.filter(([key]) => key !== 'ss')
	// 	.map(([key, value]) => `${key}:w-[${value}]`)
	// 	.join(' ');
	// // Add the newly created breakpoint classes into the total list
	// classNames += breakClasses;
	// classNames += ' ss:w-[400px]';

	// console.log(classNames);

	// const writtenNames = 'ss:w-[400px] xs:w-[480px] md:w-[768px]';

	return (
		<div className='ss:w-[400px] xs:w-[480px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] 3xl:w-[1920px]'>
			{children}
		</div>
	);
};

export default Container;
