import { Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { PrimaryButton } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { IconButton } from 'src/components/IconButton';
import { InputField } from 'src/components/InputField';
import { BlackTitle, ButtonMediumText, H3Title, HeaderMedium, HeaderSmall, PreTitle } from 'src/components/Typography';
import { Logo } from '../Logo';

export const Login = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column ',
				justifyContent: 'center',
				width: '100vw',
				minHeight: '100vh',
				padding: theme => theme.spacing(25),
				background: 'linear-gradient(to bottom, #FFFFFF 30%, #C7ADF8, #9CB0F9)'
			}}
		>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
					<Logo />
					<Box
						sx={{
							display: 'flex',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<HeaderSmall sx={{ color: '#776A92' }}>
							ChainSend offers a user-friendly platform where users can interact, create content, and earn rewards
							effortlessly.
						</HeaderSmall>
					</Box>
				</Box>
				<Box
					sx={{
						width: '40%',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						gap: 5,
						justifyContent: 'start',
						alignItems: 'center',
						backgroundColor: '#FFFFFF',
						padding: theme => theme.spacing(5),
						borderRadius: 1,
						boxShadow: theme => `${theme.spacing(0, 1, 2, 0)} ${theme.palette.shadow.secondary}`
					}}
				>
					<Form action={() => console.log('')} defaultValues={{ email: '', password: '' }}>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
							<H3Title>Welcome Back</H3Title>
							<InputField startIcon="email" name="email" placeholder="Enter Email ID" />
							<InputField startIcon="password" type="password" name="password" placeholder="Enter Password" />
							<PrimaryButton>Login</PrimaryButton>
						</Box>
					</Form>
					<PreTitle>
						First time?&nbsp;
						<Link component={NavLink} to="/home">
							<ButtonMediumText color="text.secondary">Create New Account</ButtonMediumText>
						</Link>
					</PreTitle>

					<BlackTitle>Login with social platforms</BlackTitle>
					<Box sx={{ display: 'flex', gap: 3 }}>
						<IconButton icon="google" />
						<IconButton icon="twitterlive" />
						<IconButton icon="telegramlive" />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
