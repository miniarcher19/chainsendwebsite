import { Box, Stack } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useDevice } from 'src/hooks/useDevice';

export const Main = ({ children }: PropsWithChildren) => {
	return (
		<Box
			component="main"
			sx={{
				display: 'flex',
				width: '100vw',
				height: '100vh',
				backgroundColor: 'white'
			}}
		>
			{children}
		</Box>
	);
};

export const Column = ({ children }: PropsWithChildren) => {
	const { isDesktop } = useDevice();

	return (
		<Stack
			direction={isDesktop ? 'row' : 'column'}
			gap={2.5}
			sx={{
				'& > *': {
					flex: 1
				}
			}}
		>
			{children}
		</Stack>
	);
};
