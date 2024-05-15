import { Box } from '@mui/material';
import { BlackTitle, H3Title, PreTitle } from 'src/components/Typography';
import { AccAvatar, LargeAvatar } from 'src/components/Avatar';
import { IconButton } from 'src/components/IconButton';
import { useDevice } from 'src/hooks/useDevice';
import { PrimaryButton } from 'src/components/Button';
import { CustomToggleButtonGroup, IToggleBtnOption } from 'src/components/ToggleButtonGroup';
import { useState } from 'react';
import { StandaloneInputField } from 'src/components/InputField';
import { forEach } from 'ramda';

export const People = () => {
	const { iMid } = useDevice();
	const [peopleFilterKey, setPeopleFilterKey] = useState('follower');
	const [search, setSearchKey] = useState('');
	const peopleFilterOptions: IToggleBtnOption[] = [
		{ id: 'follower', value: 'follower', label: 'Followers' },
		{ id: 'following', value: 'following', label: 'Following' },
		{ id: 'visit', value: 'visit', label: 'Recent Visited' },
		{ id: 'favourite', value: 'favourite', label: 'Favourited' }
	];

	const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
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
					height: '100%',
					mx: 'auto'
				}}
			>
				<Box
					sx={{
						width: '100%',
						padding: 3,
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
						minHeight: '100%',
						borderRadius: 1,
						bgcolor: '#FFFFFF'
					}}
				>
					<H3Title>People</H3Title>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
						<CustomToggleButtonGroup
							sx={{ flex: 1 }}
							defaultValue="follower"
							options={peopleFilterOptions}
							onChange={val => setPeopleFilterKey(val)}
						/>
						<StandaloneInputField
							value={search}
							boxSx={{ width: 'auto' }}
							name="search"
							placeholder="Search by username"
							startIcon="search"
							onChange={e => setSearchKey(e.target.value)}
						/>
					</Box>
					<Box
						sx={{
							width: '100%',
							padding: 2,
							display: 'flex',
							justifyContent: 'flex-start',
							flexWrap: 'wrap',
							gap: 5,
							overflowY: 'auto'
						}}
					>
						{arr.map(item => (
							<Box
								key={item}
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									gap: 1
								}}
							>
								<AccAvatar image="largeprofile.png" alt="Account Avatar" />
								<BlackTitle>Nancy Onorato</BlackTitle>
								<PreTitle>@nancy78</PreTitle>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
