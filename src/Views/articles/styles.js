import { Button, Card, Slider, Box } from '@material-ui/core';
import { Style } from '@mui/icons-material';
import { alpha, styled } from '@mui/material/styles';

// Exemple
export const SuccessSlider = styled(Slider)(({ theme }) => ({
    width: 300,
    color: theme.palette.success.main,
    '& .MuiSlider-thumb': {
        '&:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
        },
        '&.Mui-active': {
            boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
        },
    },
}));

export const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    variant:'contained',
    size:'small',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
}));

// Grid responsiveness: xs, md, ...

// CardMedia
