import { Box, Link, Stack } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuButton } from 'src/components/Button';
import { Icons } from 'src/components/icons';
import { Logo } from 'src/views/Logo';

const menuList = [
	{
		title: 'News Feed',
		link: 'home'
	},
	{
		title: 'Live Pairs',
		link: 'pair'
	},
	{
		title: 'People',
		link: 'people'
	},
	{
		title: 'Messages',
		link: 'message'
	},
	{
		title: 'Wallet',
		link: 'wallet'
	},
	{
		title: 'My Profile',
		link: 'profile'
	},
	{
		title: 'Settings',
		link: 'settings'
	}
];

const iconNames: Icons[] = ['feed', 'pair', 'people', 'message', 'wallet', 'user', 'settings'];

export const MenuList = ({ isSideMenuOpen = true }: { isSideMenuOpen?: boolean }) => {
	const location = useLocation();
	const currentPath = location.pathname.split('/')[1];
	return (
		<Stack
			sx={{
				gap: 2,
				width: '100%'
			}}
		>
			<Box sx={{ mb: theme => theme.spacing(5) }}>
				<Logo />
			</Box>
			{menuList?.map((item, index) => (
				<Link key={index} component={NavLink} to={item.link} sx={{ textDecoration: 'none' }}>
					<MenuButton startIcon={iconNames[index]} isFocused={currentPath === item.link.split('#')[0]}>
						{isSideMenuOpen && item.title}
					</MenuButton>
				</Link>
			))}
		</Stack>
	);
};
