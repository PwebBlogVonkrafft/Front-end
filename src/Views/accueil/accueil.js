import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import NewspaperTwoToneIcon from '@mui/icons-material/NewspaperTwoTone';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import LibraryMusicTwoToneIcon from '@mui/icons-material/LibraryMusicTwoTone';

import { deepPurple, grey } from '@mui/material/colors';
import { palette } from '@mui/system';

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import ButtonBase from '@mui/material/ButtonBase';

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

import img_news from "./image_home_page.png";


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 1000,
  color: theme.palette.text.primary,
}));



const messageN = `Dernière news`;
const messageD = `Dernière date`;
const messageV = `Dernière vidéo`;
const messageM = `Dernière musique`;



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));



const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});



function DerniereNewsCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card 
      sx={{ 
        p: 5,
        margin: 'auto',
        maxWidth: 750,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}>
      
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Stack direction="row" spacing={2}>
              <Img alt="Image de la news" src={img_news} />
            </Stack>
          </ButtonBase>
        </Grid>

        <Grid item xs={12} sm container>
          <CardHeader
            title="Je suis trop fort, faut le dire"
            subheader="Mars 6, 2022"
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Scrivo delle cose a caso tanto è giusto una prova per vedere se il
              testo esce bene oppure no. Io scrivo robe, perchè nell'immagine c'è
              una banana e quindi posso.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <CardActions disableSpacing>
        {" "}
        {/* Mettre l'icone à droite */}
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>En savoir plus :</Typography>
          <Typography paragraph>
            SOUS - TITRE : Nella vecchia fattoria hia hia ho. Quante bestie ha
            zio Tobia, hia hia ho.
          </Typography>
          <Typography paragraph>
            PARAGRAPHE 1 : banana banana banana banana banana banana banana
            banana banana banana banana banana banana banana banana banana
            banana banana banana banana banana.
          </Typography>
          <Typography paragraph>
            PARAGRAPHE 2 : banana banana banana banana banana banana banana
            banana banana banana banana banana banana banana banana banana
            banana banana banana banana banana.
          </Typography>
          <Typography>
            FIN.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}



function DateGrid() {
  return (
    <Paper
      sx={{
        p: 5,
        margin: 'auto',
        maxWidth: 750,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ width: 120, height: 120, bgcolor: grey[400],}}>6 MARS 2021</Avatar>
          </Stack>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                LA PIZZA E' IL MIO PIATTO PREFERITO
              </Typography>
              <Typography variant="body2" gutterBottom>
                6 mars 2022
              </Typography>
              <Typography variant="body2" color="text.secondary">
                perchè è buona
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer'}} color="common.white" variant="body2">
                <Stack direction="row" spacing={2}>
                  <Button color="secondary" variant="contained" endIcon={<SendIcon />}>
                    Accédez au post Facebook
                  </Button>
                </Stack>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              ...
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}



function VideoGrid() {
  return (
    <Paper
      sx={{
        p: 5,
        margin: 'auto',
        maxWidth: 750,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <CardMedia
              component="iframe"
              image="https://www.youtube.com/embed/2WPYPg-iDrk"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                SOLE - DORIAN VONKRAFFT (MUSIC VIDEO)
              </Typography>
              <Typography variant="body2" gutterBottom>
                4 juin 2021
              </Typography>
              <Typography variant="body2" color="text.secondary">
                609 vues
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer'}} color="common.white" variant="body2">
                <Stack direction="row" spacing={2}>
                  <Button color="secondary" variant="contained" endIcon={<SendIcon />}>
                    Écoutez-la maintenant
                  </Button>
                </Stack>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              € 13.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}



function MusiqueGrid() {
  return (
    <Paper
      sx={{
        p: 5,
        margin: 'auto',
        maxWidth: 750,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <CardMedia
              component="iframe"
              image="https://www.youtube.com/embed/2WPYPg-iDrk"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                SOLE - DORIAN VONKRAFFT (MUSIC VIDEO)
              </Typography>
              <Typography variant="body2" gutterBottom>
                4 juin 2021
              </Typography>
              <Typography variant="body2" color="text.secondary">
                609 vues
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer'}} color="common.white" variant="body2">
                <Stack direction="row" spacing={2}>
                  <Button color="secondary" variant="contained" endIcon={<SendIcon />}>
                    Écoutez-la maintenant
                  </Button>
                </Stack>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              € 13.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}



function Acceuil() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}> {/* La propriété CSS overflow est une propriété raccourcie qui définit comment gérer le dépassement du contenu d'un élément dans son bloc.  */}

      <StyledPaper sx={{ my: 5, mx: 'auto', p: 5, }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><NewspaperTwoToneIcon sx={{ width: 45, height: 45 }}></NewspaperTwoToneIcon></Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{messageN}</Typography>
            <DerniereNewsCard></DerniereNewsCard>
          </Grid>
        </Grid>
      </StyledPaper>

      <StyledPaper sx={{ my: 5, mx: 'auto', p: 5, }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><TodayTwoToneIcon sx={{ width: 45, height: 45 }} ></TodayTwoToneIcon></Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{messageD}</Typography>
            <DateGrid></DateGrid>
          </Grid>
        </Grid>
      </StyledPaper>

      <StyledPaper sx={{ my: 5, mx: 'auto', p: 5, }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><OndemandVideoTwoToneIcon sx={{ width: 45, height: 45 }} ></OndemandVideoTwoToneIcon></Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{messageV}</Typography>
            <VideoGrid></VideoGrid>
          </Grid>
        </Grid>
      </StyledPaper>

      <StyledPaper sx={{ my: 5, mx: 'auto', p: 5, }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><LibraryMusicTwoToneIcon sx={{ width: 45, height: 45 }} ></LibraryMusicTwoToneIcon></Avatar>
          </Grid>
          <Grid item xs>
          <Typography>{messageM}</Typography>
          <MusiqueGrid></MusiqueGrid>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}



function Accueil() {
  return ( 
    <Box >
      <Acceuil></Acceuil>    
    </Box>
  );
}

export default Accueil;