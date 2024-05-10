import { Box } from '@mui/material';
import { BlackTitle, H4Title, PreTitle } from 'src/components/Typography';
import { Icon } from 'src/components/Icon';
import { PrimaryButton, QuaternaryButton } from 'src/components/Button';
import { LargeAvatar } from 'src/components/Avatar';

export const RightSidebar = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 3,
				maxWidth: '300px',
				padding: theme => theme.spacing(6, 2)
			}}
		>
			<Box
				sx={{ display: 'flex', justifyContent: 'space-between', padding: 2.5, bgcolor: '#F3BA2F0D', borderRadius: 1 }}
			>
				<BlackTitle>Coins Earned</BlackTitle>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					<Icon icon="coin" />
					<PreTitle sx={{ color: '#6C4C00' }}>4300</PreTitle>
				</Box>
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', padding: 2.5, gap: 2, bgcolor: '#F9FAFB', borderRadius: 1 }}>
				<H4Title>Subscribe to premium</H4Title>
				<PreTitle>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</PreTitle>
				<PrimaryButton>Subscribe</PrimaryButton>
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', padding: 2.5, gap: 1, bgcolor: '#F9FAFB', borderRadius: 1 }}>
				<H4Title>Top people to know</H4Title>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<LargeAvatar image="profile.png" />
						<BlackTitle>Mathew Asler</BlackTitle>
					</Box>
					<QuaternaryButton>Follow</QuaternaryButton>
				</Box>
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', padding: 2.5, gap: 2, bgcolor: '#F9FAFB', borderRadius: 1 }}>
				<H4Title>Top Coins</H4Title>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<LargeAvatar image="bitcoin.png" />
						<BlackTitle>Bitcoin</BlackTitle>
					</Box>
					<QuaternaryButton>Open</QuaternaryButton>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<LargeAvatar image="binance.png" />
						<BlackTitle>Binance</BlackTitle>
					</Box>
					<QuaternaryButton>Open</QuaternaryButton>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<LargeAvatar image="verify.png" />
						<BlackTitle>Cardano</BlackTitle>
					</Box>
					<QuaternaryButton>Open</QuaternaryButton>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<LargeAvatar image="alchemy.png" />
						<BlackTitle>Alchemy</BlackTitle>
					</Box>
					<QuaternaryButton>Open</QuaternaryButton>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<LargeAvatar image="theta.png" />
						<BlackTitle>Theta</BlackTitle>
					</Box>
					<QuaternaryButton>Open</QuaternaryButton>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					padding: 2.5,
					bgcolor: theme => theme.palette.border.subtle,
					borderRadius: 1
				}}
			>
				<H4Title>Advertise</H4Title>
			</Box>
		</Box>
	);
};
