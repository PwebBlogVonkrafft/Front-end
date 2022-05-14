import LibraryMusicTwoToneIcon from '@mui/icons-material/LibraryMusicTwoTone';
import NewspaperTwoToneIcon from '@mui/icons-material/NewspaperTwoTone';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { deepPurple } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Day, Musique, News, Video } from "./composants/dernierObjet";



// div avec des CSS
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 1000,
  color: theme.palette.text.primary,
}));


// Titres de chaque section
const messageN = 'Dernier article';
const messageD = 'Dernière date';
const messageV = 'Dernière vidéo';
const messageM = 'Dernière musique';


// Fonction principale renvoyant le résultat
function Accueil() {
  return (    
    <Box sx={{ justifyContent: 'flex-end', flexGrow: 1, overflow: 'hidden', px: 3 }}> {/* La propriété CSS overflow est une propriété raccourcie qui définit comment gérer le dépassement du contenu d'un élément dans son bloc.  */}
      {
        <StyledPaper elevation={10} sx={{ my: 5, mx: 'auto', p: 5, }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar component={Paper} elevation={10} sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><NewspaperTwoToneIcon sx={{ width: 45, height: 45 }}/></Avatar>
            </Grid>
            <Grid item xs>
              <Typography>{messageN}</Typography>
              <News/>
            </Grid>
          </Grid>
        </StyledPaper>
      }
      {
        <StyledPaper elevation={10} sx={{ my: 5, mx: 'auto', p: 5, }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar component={Paper} elevation={10} sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><TodayTwoToneIcon sx={{ width: 45, height: 45 }} /></Avatar>
            </Grid>
            <Grid item xs>
              <Typography>{messageD}</Typography>
              <Day/>
            </Grid>
          </Grid>
        </StyledPaper>
      }

      {
        <StyledPaper elevation={10} sx={{ my: 5, mx: 'auto', p: 5, }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar component={Paper} elevation={10} sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><OndemandVideoTwoToneIcon sx={{ width: 45, height: 45 }} /></Avatar>
            </Grid>
            <Grid item xs>
              <Typography>{messageV}</Typography>
              <Video/>
            </Grid>
          </Grid>
        </StyledPaper>
      }

      {
        <StyledPaper elevation={10} sx={{ my: 5, mx: 'auto', p: 5, }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar component={Paper} elevation={10} sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><LibraryMusicTwoToneIcon sx={{ width: 45, height: 45 }} /></Avatar>
            </Grid>
            <Grid item xs>
            <Typography>{messageM}</Typography>
            <Musique/>
            </Grid>
          </Grid>
        </StyledPaper>
      }
    </Box>
  );
}

export default Accueil;
