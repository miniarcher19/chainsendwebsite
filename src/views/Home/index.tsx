import { Box } from '@mui/material';
import { HomePostList } from './components/HomePostList';
import { H3Title, PreTitle } from 'src/components/Typography';
import { LargeAvatar } from 'src/components/Avatar';
import { IconButton } from 'src/components/IconButton';
import { useDevice } from 'src/hooks/useDevice';
import { PrimaryButton } from 'src/components/Button';

export const Home = () => {
	const { iMid } = useDevice();
	return (
		<Box sx={{ width: '100%', height: '100vh' }}>
			<Box
				sx={{
					mt: 6,
					py: { xs: 2.5, lg: 5 },
					px: { xs: 5 },
					gap: { xs: 5, lg: 4 },
					display: 'flex',
					overflowY: 'auto',
					flexDirection: 'column',
					width: '100%',
					maxWidth: { xs: 'none', lg: '704px' },
					mx: 'auto'
				}}
			>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
					<H3Title>Welcome Back, Ahmed 👋</H3Title>
					<PreTitle>Here's what's happening with crypto today.</PreTitle>
				</Box>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
						bgcolor: '#FFFFFF',
						padding: 3,
						borderRadius: 1.5
					}}
				>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, width: '100%' }}>
							<LargeAvatar image="profile.png" />
							<PreTitle>What's on your mind?</PreTitle>
						</Box>
						<PrimaryButton>Post</PrimaryButton>
					</Box>

					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pl: 5 }}>
						{iMid ? (
							<IconButton icon="add" />
						) : (
							// <IconButton icon="add" onClick={openCreatePostModal} />
							<>
								<IconButton icon="image" />
								<IconButton icon="video" />
								<IconButton icon="gif" />
								{/* <IconButton icon="image" onClick={openCreatePostModal} />
							<IconButton icon="gif" onClick={openCreatePostModal} />
						<IconButton icon="attachFile" onClick={openCreatePostModal} /> */}
							</>
						)}
					</Box>
				</Box>
				<HomePostList />
			</Box>
		</Box>
	);
};
