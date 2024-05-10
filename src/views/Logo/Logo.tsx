import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { H2Title } from 'src/components/Typography';

export const Logo = () => {
	return (
		<Link sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 1 }} component={NavLink} to="/">
			<img src="logo.svg" width={30} alt="logo" />
			<H2Title>ChainSend</H2Title>
		</Link>
	);
};
