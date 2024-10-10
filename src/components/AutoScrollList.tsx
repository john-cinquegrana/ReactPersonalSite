import { Typography, useTheme } from '@mui/material';
import { Box } from '@mui/material';
import { useBreakpoint } from '@root/hooks/styleHooks';
import React, { useEffect, useRef } from 'react';

interface AutoScrollListProps {
	items: string[];
	height: number;
}

const AutoScrollList: React.FC<AutoScrollListProps> = ({ items }) => {
	const listRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (listRef.current) {
			listRef.current.scrollTop = listRef.current.scrollHeight;
		}
	}, [items]);

	const breakpoint = useBreakpoint();

	const theme = useTheme();

	let textSize: number;

	switch (breakpoint) {
		case 'xs':
			textSize = 20;
			break;
		case 'sm':
			textSize = 24;
			break;
		case 'md':
			textSize = 25;
			break;
		case 'lg':
			textSize = 39;
			break;
		case 'xl':
			textSize = 35;
			break;
		default:
			textSize = 20;
			break;
	}

	return (
		<Box
			ref={listRef}
			bgcolor={theme.palette.primaryContainer}
			// minHeight={`${textSize * 1.5}px`}
			// maxHeight={`${textSize * 4}px`}
			height={`${textSize * 3.5}px`}
			sx={{
				overflowY: 'auto',
				padding: '10px',
				borderRadius: '12px', // Added border radius to round the corners
				position: 'relative', // Ensure the Box is the containing block for absolute positioning
				boxShadow: `inset 0 0 10px ${theme.palette.primaryContainer}`, // Added inset shadow
				overflow: 'hidden', // Hide overflow content
			}}
		>
			<div
				style={{
					position: 'absolute',
					overflow: 'hidden', // Hide overflow content
				}}
			>
				{items.map((item, index) => (
					<Typography
						variant='h4'
						height={`${textSize}px`}
						key={index}
						noWrap // Ensure text does not wrap and is cut off
					>
						{item}
					</Typography>
				))}
			</div>
		</Box>
	);
};

export default AutoScrollList;
