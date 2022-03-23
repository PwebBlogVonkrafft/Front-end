import { Button, Card, Slider, Box } from '@material-ui/core';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
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

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    color: theme.palette.text.primary,
}));

export const StyledSwitch = styled(Switch)(({ theme }) => ({
    // backgroundColor: theme.palette.secondary.main,
    // TODO set activated color to purple everywhere
}));

// Grid responsiveness: xs, md, ...

// CardMedia
