import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';


export const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 450,
    color: theme.palette.text.primary,
  }));

