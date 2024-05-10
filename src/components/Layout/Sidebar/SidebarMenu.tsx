import { Box, Stack } from '@mui/material';
import { MenuList } from './Menulist';
import { useDevice } from 'src/hooks/useDevice';
import { useRecoilValue } from 'recoil';
import { isSideMenuOpenedState } from 'src/recoil/sideMenu';
import { LargeAvatar } from 'src/components/Avatar';
import { BlackTitle, PreTitle } from 'src/components/Typography';
import { IconButton } from 'src/components/IconButton';

export const SidebarMenu = ({ isSidebarAlwaysClosed = false }: { isSidebarAlwaysClosed?: boolean }) => {
	const { isSidebarFullShown } = useDevice();

	const isSideMenuOpened = useRecoilValue(isSideMenuOpenedState);

	const isMenuOpened = isSideMenuOpened && !isSidebarAlwaysClosed && isSidebarFullShown;

	return (
		<Stack
			sx={theme => ({
				padding: theme.spacing(5, 3, 3, 3),
				width: isMenuOpened ? '300px' : '84px',
				flexDirection: 'column',
				justifyContent: 'space-between',
				transition: 'width 0.2s ease',
				overflowY: 'auto',
				height: '100vh',
				borderRight: `${theme.spacing(0.125)} solid`,
				borderColor: isMenuOpened ? 'transparent' : theme.palette.border.subtle,
				gap: 4,
				background: 'linear-gradient(to bottom, #FDFCFF 20%, #E8E8FF 60%, #FFFFFF)'
			})}
		>
			<MenuList isSideMenuOpen={isMenuOpened} />
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 1 }}>
					<LargeAvatar image="profile.png" />
					<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: 0 }}>
						<BlackTitle>Junaid Mohamed</BlackTitle>
						<PreTitle>Free Account</PreTitle>
					</Box>
				</Box>
				<IconButton icon="logout" />
			</Box>
		</Stack>
	);
};
