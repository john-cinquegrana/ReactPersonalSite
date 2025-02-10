import React, { useState } from 'react';

import { FaRegCopy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { BodySmall } from './Typography';
import {
	Button,
	ButtonProps,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Spacer,
} from '@heroui/react';

interface CopyButtonProps extends ButtonProps {
	children: React.ReactNode;
	slideoutContent: React.ReactNode;
	onClickPress: () => void;
}

const CopyButton: React.FC<CopyButtonProps> = ({
	children,
	onClickPress,
	slideoutContent,
	...buttonProps
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);

	return (
		<div
			style={{ display: 'flex', alignItems: 'center' }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => {
				setIsHovered(false);
				setIsPopoverOpen(false);
			}}
		>
			<Button {...buttonProps}>{children}</Button>
			<motion.div
				initial={{ x: -50, opacity: 0 }}
				animate={{
					x: isHovered ? 10 : -50,
					opacity: isHovered ? 1 : 0,
				}}
				transition={{ type: 'spring', stiffness: 300 }}
				style={{ marginLeft: '10px' }}
			>
				<Popover
					isOpen={isPopoverOpen}
					onOpenChange={(isOpen) => setIsPopoverOpen(isOpen)}
					placement='top'
					showArrow={true}
					classNames={{
						base: [
							// arrow color
							'before:bg-black',
						],
						content: ['bg-black text-default'],
					}}
				>
					<PopoverTrigger>
						<div
							className='flex flex-row justify-start items-center'
							onClick={() => onClickPress()}
						>
							<FaRegCopy />
							<Spacer x={2} />
							{slideoutContent}
						</div>
					</PopoverTrigger>
					<PopoverContent>
						<BodySmall>Copied!</BodySmall>
					</PopoverContent>
				</Popover>
			</motion.div>
		</div>
	);
};

export default CopyButton;
