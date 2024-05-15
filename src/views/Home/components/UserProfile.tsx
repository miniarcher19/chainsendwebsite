import { Box } from '@mui/material';
import { HomePostList } from './HomePostList';
import { BlackTitle, H3Title, PreTitle } from 'src/components/Typography';
import { AccAvatar, LargeAvatar } from 'src/components/Avatar';
import { IconButton } from 'src/components/IconButton';
import { useDevice } from 'src/hooks/useDevice';
import { PrimaryButton, SecondaryButton } from 'src/components/Button';
import { Icon } from 'src/components/Icon';

export const UserProfile = () => {
	const { iMid } = useDevice();
	return (
		<Box sx={{ width: '100%', height: '100vh' }}>
			<Box
				sx={{
					pt: { xs: 8.5, lg: 11 },
					pb: { xs: 2.5, lg: 5 },
					px: { xs: 5, lg: 10 },
					gap: { xs: 5, lg: 4 },
					display: 'flex',
					overflowY: 'auto',
					flexDirection: 'column',
					width: '100%',
					mx: 'auto'
				}}
			>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						gap: 6,
						borderRadius: 1.5,
						padding: 0.5,
						bgcolor: '#FFFFFF'
					}}
				>
					<Box
						sx={{
							width: '100%',
							position: 'relative',
							height: theme => theme.spacing(20),
							background: 'linear-gradient(to right, #4C45B1, #E2E2F4)',
							borderRadius: 1
						}}
					>
						<AccAvatar
							image="largeprofile.png"
							sx={{
								position: 'absolute',
								left: theme => theme.spacing(3),
								bottom: theme => theme.spacing(-3.5)
							}}
						/>
					</Box>
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: theme => theme.spacing(1, 3)
						}}
					>
						<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
							<H3Title>Junaid Mohamed</H3Title>
							<PreTitle>@junaidx7</PreTitle>
						</Box>
						<Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 1 }}>
							<SecondaryButton>
								<BlackTitle>12.3k</BlackTitle>
								<PreTitle>Followers</PreTitle>
							</SecondaryButton>
							<SecondaryButton>
								<BlackTitle>12.3k</BlackTitle>
								<PreTitle>Followers</PreTitle>
							</SecondaryButton>
						</Box>
					</Box>
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
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }}>
							<BlackTitle>Total Coins</BlackTitle>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
								<Icon icon="coin" />
								<PreTitle>4300</PreTitle>
							</Box>
						</Box>
						<SecondaryButton size="small">See where you can spend it</SecondaryButton>
					</Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between'
						}}
					>
						<Box
							sx={{
								width: '140px',
								height: '140px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								gap: 4,
								borderRadius: 1,
								border: `1px solid #9695AD`,
								padding: 1
							}}
						>
							<Box>
								<IconButton icon="share" />
							</Box>
							<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
									<Icon icon="graycoin" color="secondary" />
									<BlackTitle fontSize={16} fontWeight={600}>
										234
									</BlackTitle>
								</Box>
								<PreTitle>coins by shares</PreTitle>
							</Box>
						</Box>
						<Box
							sx={{
								width: '140px',
								height: '140px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								gap: 4,
								borderRadius: 1,
								border: `1px solid #9695AD`,
								padding: 1
							}}
						>
							<Box>
								<IconButton icon="message" />
							</Box>
							<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
									<Icon icon="graycoin" color="secondary" />
									<BlackTitle fontSize={16} fontWeight={600}>
										454
									</BlackTitle>
								</Box>
								<PreTitle>coins by comment</PreTitle>
							</Box>
						</Box>
						<Box
							sx={{
								width: '140px',
								height: '140px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								gap: 4,
								borderRadius: 1,
								border: `1px solid #9695AD`,
								padding: 1
							}}
						>
							<Box>
								<IconButton icon="image" />
							</Box>
							<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
									<Icon icon="graycoin" color="secondary" />
									<BlackTitle fontSize={16} fontWeight={600}>
										454
									</BlackTitle>
								</Box>
								<PreTitle>coins by image</PreTitle>
							</Box>
						</Box>
						<Box
							sx={{
								width: '140px',
								height: '140px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								gap: 4,
								borderRadius: 1,
								border: `1px solid #9695AD`,
								padding: 1
							}}
						>
							<Box>
								<IconButton icon="video" />
							</Box>
							<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
									<Icon icon="graycoin" color="secondary" />
									<BlackTitle fontSize={16} fontWeight={600}>
										454
									</BlackTitle>
								</Box>
								<PreTitle>coins by video</PreTitle>
							</Box>
						</Box>
						<Box
							sx={{
								width: '140px',
								height: '140px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								gap: 4,
								borderRadius: 1,
								border: `1px solid #9695AD`,
								padding: 1
							}}
						>
							<Box>
								<IconButton icon="like" />
							</Box>
							<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
								<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
									<Icon icon="graycoin" color="secondary" />
									<BlackTitle fontSize={16} fontWeight={600}>
										454
									</BlackTitle>
								</Box>
								<PreTitle>coins by likes</PreTitle>
							</Box>
						</Box>
					</Box>
					<PreTitle>This is only visible for you</PreTitle>
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
