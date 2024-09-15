import React from 'react';

interface CircleProps {
    color: string;
    radius: number;
}

/**
 * @returns A circle element as an SVG.
 */
const Circle: React.FC<CircleProps> = ({ color, radius }) => {
    return (
        <svg width={radius * 2} height={radius * 2}>
            <circle cx={radius} cy={radius} r={radius} fill={color} />
        </svg>
    );
};

export default Circle;