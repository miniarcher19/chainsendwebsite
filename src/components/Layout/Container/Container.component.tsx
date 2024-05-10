import { Box, Stack } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useDevice } from 'src/hooks/useDevice';

export const Main = ({ children }: PropsWithChildren) => {
	return (
		<Box
			component="main"
			sx={theme => ({
				display: 'grid',
				width: '100vw',
				height: '100vh',
				backgroundColor: 'white',
				gridTemplateColumns: 'auto minmax(100px,1fr)',
				[theme.breakpoints.down('lg')]: {
					display: 'flex',
					maxHeight: 'initial'
				}
			})}
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
