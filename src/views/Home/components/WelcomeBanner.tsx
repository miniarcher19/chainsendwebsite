import { Box } from '@mui/material';
import { H1Title, Paragraph2 } from 'src/components/Typography';
import { useDevice } from 'src/hooks/useDevice';

export const WelcomeBanner = () => {
	const { iMd } = useDevice();

	return (
		<>
			<Box
				sx={theme => ({
					display: 'flex',
					position: 'relative',
					background: theme.palette.gradient2.main,
					borderRadius: theme.spacing(1.5),
					[theme.breakpoints.down('md')]: {
						overflow: 'hidden'
					}
				})}
			>
				<Box
					sx={theme => ({
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						padding: theme.spacing(3.5, 3.5, 4),
						zIndex: 1,
						maxWidth: '374px',
						width: '100%',
						[theme.breakpoints.down('md')]: {
							maxWidth: 'initial',
							padding: theme.spacing(3, 3, 21.875)
						}
					})}
				>
					<H1Title> Enter the Realm of Web3 Gaming</H1Title>
					<Paragraph2 lineHeight="20px">
						Welcome to Gilder, where the future of gaming meets limitless possibilities.
					</Paragraph2>
				</Box>
			</Box>
		</>
	);
};
