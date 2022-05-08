// Librairies générales
import LibraryMusicTwoToneIcon from '@mui/icons-material/LibraryMusicTwoTone';
// Librairies pour les icônes
import NewspaperTwoToneIcon from '@mui/icons-material/NewspaperTwoTone';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
// Librairies couleurs et thèmes
import { deepPurple } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
// (avec des icônes)
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
const messageN = `Dernière news`;
const messageD = `Dernière date`;
const messageV = `Dernière vidéo`;
const messageM = `Dernière musique`;


// Fonction principale renvoyant le résultat
function Accueil() {
  /*new Date().toLocaleString() + ""*/
  return (
      <div>      
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}> {/* La propriété CSS overflow est une propriété raccourcie qui définit comment gérer le dépassement du contenu d'un élément dans son bloc.  */}
          <StyledPaper elevation={10} sx={{ my: 5, mx: 'auto', p: 5, }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar component={Paper} elevation={10} sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><NewspaperTwoToneIcon sx={{ width: 45, height: 45 }}></NewspaperTwoToneIcon></Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{messageN}</Typography>
                <News></News>
                <div>
                  <button>TRY</button>
                </div>
              </Grid>
            </Grid>
          </StyledPaper>

          <StyledPaper elevation={10} sx={{ my: 5, mx: 'auto', p: 5, }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar component={Paper} elevation={10} sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><TodayTwoToneIcon sx={{ width: 45, height: 45 }} ></TodayTwoToneIcon></Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{messageD}</Typography>
                <Day></Day>
                <div>
                  <button>TRY</button>
                </div>
              </Grid>
            </Grid>
          </StyledPaper>

          <StyledPaper elevation={10} sx={{ my: 5, mx: 'auto', p: 5, }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar component={Paper} elevation={10} sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><OndemandVideoTwoToneIcon sx={{ width: 45, height: 45 }} ></OndemandVideoTwoToneIcon></Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{messageV}</Typography>
                <Video></Video>
              </Grid>
            </Grid>
          </StyledPaper>

          <StyledPaper elevation={10} sx={{ my: 5, mx: 'auto', p: 5, }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar component={Paper} elevation={10} sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><LibraryMusicTwoToneIcon sx={{ width: 45, height: 45 }} ></LibraryMusicTwoToneIcon></Avatar>
              </Grid>
              <Grid item xs>
              <Typography>{messageM}</Typography>
              <Musique></Musique>
              </Grid>
            </Grid>
          </StyledPaper>
        </Box>        
      </div>
  );
}

export default Accueil;