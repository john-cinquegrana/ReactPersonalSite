import React from 'react';

interface ContainerProps {
	children: React.ReactNode;
}

const Container: React.FC<
	ContainerProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...props }) => {
	const passedProps = props;
	passedProps.className +=
		' md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] 3xl:w-[1920px]';
	return <div {...props}>{children}</div>;
};

export default Container;
