import React from 'react';

interface SVGCircleProps {
	color: string;
	radius: number;
	padding: number;
}

const SVGCircle: React.FC<SVGCircleProps> = ({ color, radius, padding }) => {
	const size = radius * 2 + padding * 2;
	return (
		<svg
			width={size}
			height={size}
		>
			<circle
				cx={radius + padding}
				cy={radius + padding}
				r={radius}
				fill={color}
			/>
		</svg>
	);
};

interface SVGEllipseProps {
	color: string;
	rx: number;
	ry: number;
	padding: number;
}

const SVGEllipse: React.FC<SVGEllipseProps> = ({ color, rx, ry, padding }) => {
	const width = rx * 2 + padding * 2;
	const height = ry * 2 + padding * 2;
	return (
		<svg
			width={width}
			height={height}
		>
			<ellipse
				cx={rx + padding}
				cy={ry + padding}
				rx={rx}
				ry={ry}
				fill={color}
			/>
		</svg>
	);
};

export { SVGEllipse, SVGCircle };
