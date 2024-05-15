import { useState, useEffect } from 'react';
import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';
import { Icon } from 'src/components/Icon';
import { CountBadge } from 'src/components/Badge';
import { styled } from '@mui/system';
import { IToggleButtonGroupProps } from './ToggleButtonGroup.types';
import { BUTTON_ICON_SIZE } from 'src/constants/theme.constants';

export const CustomToggleButtonGroup = ({
	options,
	onChange,
	defaultValue = '',
	isDisabled = false,
	sx
}: IToggleButtonGroupProps) => {
	const [selectedValues, setSelectedValues] = useState<string>(defaultValue);

	useEffect(() => {
		setSelectedValues(defaultValue);
	}, [defaultValue]);

	const handleSelectionChange = (event: React.MouseEvent<HTMLElement>, newValues: string) => {
		setSelectedValues(newValues);
		if (onChange) {
			onChange(newValues || '');
		}
	};

	return (
		<StyledToggleButtonGroup
			sx={{ overflow: 'hidden', ...sx }}
			exclusive
			value={selectedValues}
			onChange={handleSelectionChange}
		>
			{options?.map(option => (
				<ToggleButton
					disabled={isDisabled}
					key={option.value}
					value={option.value}
					sx={{ width: option.width ? option.width : 'auto', overflow: 'hidden' }}
				>
					{option.startIcon ? (
						<Icon icon={option.startIcon} fontSize="small" />
					) : option.startImage ? (
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<img
								src={option.startImage}
								alt="startImg"
								width={BUTTON_ICON_SIZE}
								height={BUTTON_ICON_SIZE}
								style={{ borderRadius: '50%' }}
							/>
						</Box>
					) : (
						<></>
					)}
					<span className="toogle-button-group__label">{option.label}</span>
					{option.endIcon ? (
						<Icon icon={option.endIcon} fontSize="small" />
					) : option.endImage ? (
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<img
								src={option.endImage}
								alt="endImg"
								width={BUTTON_ICON_SIZE}
								height={BUTTON_ICON_SIZE}
								style={{ borderRadius: '50%' }}
							/>
						</Box>
					) : (
						<></>
					)}
					{option.countNum && <CountBadge count={option.countNum} />}
				</ToggleButton>
			))}
		</StyledToggleButtonGroup>
	);
};

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'flex-start',
	flexWrap: 'wrap',
	gap: theme.spacing(0.5),
	borderRadius: 0,
	'& .MuiToggleButtonGroup-grouped': {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: theme.spacing(0.875, 1.5),
		gap: theme.spacing(1),
		border: `${theme.spacing(0.125)} solid ${theme.palette.text.secondary}`,
		fontFamily: 'Exo',
		fontStyle: 'normal',
		fontWeight: 500,
		fontSize: theme.spacing(1.75),
		textTransform: 'none',
		whiteSpace: 'nowrap',
		color: theme.palette.text.secondary,
		lineHeight: theme.spacing(3),
		'& .MuiSvgIcon-root': {
			color: theme.palette.border.highlight
		},
		'&.Mui-disabled': {
			border: 0,
			color: theme.palette.text.primary,
			opacity: 0.5
		},
		'&:not(:first-of-type)': {
			border: `${theme.spacing(0.125)} solid ${theme.palette.text.secondary}`,
			borderRadius: theme.spacing(1),
			marginLeft: 0
		},
		'&:first-of-type': {
			border: `${theme.spacing(0.125)} solid ${theme.palette.text.secondary}`,
			borderRadius: theme.spacing(1)
		},
		'&.Mui-selected': {
			backgroundColor: '#FFFFFF',
			border: `${theme.spacing(0.125)} solid #6359E9`,
			color: '#6359E9',
			'& .MuiSvgIcon-root': {
				color: '#FFFFFF'
			}
		},
		'&:hover': {
			backgroundColor: '#FFFFFF'
		},
		'& .toogle-button-group__label': {
			textOverflow: 'ellipsis',
			overflow: 'hidden'
		}
	}
}));
