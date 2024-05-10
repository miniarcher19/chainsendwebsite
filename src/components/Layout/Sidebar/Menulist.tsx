import { Link, Stack } from '@mui/material';
import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuButton } from 'src/components/Button';
import { SwitchField } from 'src/components/Switch';
import { Icons } from 'src/components/icons';
import { ColorModeContext } from 'src/contexts';

const menuList = [
	{
		title: 'Home',
		link: 'home'
	},
	{
		title: 'Communities',
		link: 'forum#communities'
	},
	{
		title: 'Wallet',
		link: 'wallet'
	}
];

const iconNames: Icons[] = ['home', 'community', 'wallet'];

export const MenuList = ({ isSideMenuOpen = true }: { isSideMenuOpen?: boolean }) => {
	const location = useLocation();
	const currentPath = location.pathname.split('/')[1];
	const { isLightMode, toggleColorMode } = useContext(ColorModeContext);
	return (
		<Stack
			sx={{
				gap: 1,
				width: '100%'
			}}
		>
			{menuList?.map((item, index) => (
				<Link key={index} component={NavLink} to={item.link} sx={{ textDecoration: 'none' }}>
					<MenuButton startIcon={iconNames[index]} isFocused={currentPath === item.link.split('#')[0]}>
						{isSideMenuOpen && item.title}
					</MenuButton>
				</Link>
			))}
			<SwitchField title="switch" checked={isLightMode} onChange={toggleColorMode} />
		</Stack>
	);
};
