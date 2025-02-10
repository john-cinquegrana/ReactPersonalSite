import { FC, PropsWithChildren } from 'react';

interface TypographyProps extends PropsWithChildren<object> {
	className?: string;
}

const DisplayLarge: FC<TypographyProps> = ({
	children,
	className,
	...props
}) => (
	<h1
		className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-wide ${className}`}
		{...props}
	>
		{children}
	</h1>
);

const DisplayMedium: FC<TypographyProps> = ({
	children,
	className,
	...props
}) => (
	<h1
		className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-wide ${className}`}
		{...props}
	>
		{children}
	</h1>
);

const DisplaySmall: FC<TypographyProps> = ({
	children,
	className,
	...props
}) => (
	<h1
		className={`text-lg sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-wide ${className}`}
		{...props}
	>
		{children}
	</h1>
);

const HeadlineLarge: FC<TypographyProps> = ({
	children,
	className,
	...props
}) => (
	<h2
		className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold ${className}`}
		{...props}
	>
		{children}
	</h2>
);

const HeadlineMedium: FC<TypographyProps> = ({
	children,
	className,
	...props
}) => (
	<h2
		className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold ${className}`}
		{...props}
	>
		{children}
	</h2>
);

const HeadlineSmall: FC<TypographyProps> = ({
	children,
	className,
	...props
}) => (
	<h2
		className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold ${className}`}
		{...props}
	>
		{children}
	</h2>
);

const TitleLarge: FC<TypographyProps> = ({ children, className, ...props }) => (
	<h3
		className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl ${className}`}
		{...props}
	>
		{children}
	</h3>
);

const TitleMedium: FC<TypographyProps> = ({
	children,
	className,
	...props
}) => (
	<h3
		className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ${className}`}
		{...props}
	>
		{children}
	</h3>
);

const TitleSmall: FC<TypographyProps> = ({ children, className, ...props }) => (
	<h3
		className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl ${className}`}
		{...props}
	>
		{children}
	</h3>
);

const LabelLarge: FC<TypographyProps> = ({ children, className, ...props }) => (
	<span
		className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl ${className}`}
		{...props}
	>
		{children}
	</span>
);

const LabelMedium: FC<TypographyProps> = ({
	children,
	className,
	...props
}) => (
	<span
		className={`text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl ${className}`}
		{...props}
	>
		{children}
	</span>
);

const LabelSmall: FC<TypographyProps> = ({ children, className, ...props }) => (
	<span
		className={`text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ${className}`}
		{...props}
	>
		{children}
	</span>
);

const BodyLarge: FC<TypographyProps> = ({ children, className, ...props }) => (
	<p
		className={`text-base md:text-xl lg:text-2xl 2xl:text-3xl ${className}`}
		{...props}
	>
		{children}
	</p>
);

const BodyMedium: FC<TypographyProps> = ({ children, className, ...props }) => (
	<p
		className={`text-sm md:text-lg lg:text-xl xl:text-2xl ${className}`}
		{...props}
	>
		{children}
	</p>
);

const BodySmall: FC<TypographyProps> = ({ children, className, ...props }) => (
	<p
		className={`text-xs md:text-sm 2xl:text-base ${className}`}
		{...props}
	>
		{children}
	</p>
);

export {
	DisplayLarge,
	DisplayMedium,
	DisplaySmall,
	HeadlineLarge,
	HeadlineMedium,
	HeadlineSmall,
	TitleLarge,
	TitleMedium,
	TitleSmall,
	LabelLarge,
	LabelMedium,
	LabelSmall,
	BodyLarge,
	BodyMedium,
	BodySmall,
};
