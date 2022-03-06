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

import { deepPurple } from '@mui/material/colors';
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


//const pages = ['Musique'];


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
const messageM = `Dernière Musique`;



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
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon /> {/* Bouton avec les trois petits points */}
          </IconButton>
        }
        title="Je suis trop fort, faut le dire"
        subheader="Mars 6, 2022"
      />
      <Img alt="Image de la news" src={img_news} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Scrivo delle cose a caso tanto è giusto una prova per vedere se il
          testo esce bene oppure no. Io scrivo robe, perchè nell'immagine c'è
          una banana e quindi posso.
        </Typography>
      </CardContent>
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
                4 giu 2021
              </Typography>
              <Typography variant="body2" color="text.secondary">
                609 visualizzazioni
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
          <Typography>{messageV}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}


function HomePage(){
  return (
    <Box >
      <Acceuil></Acceuil>    
    </Box>
  );
}

export default HomePage;





/*
function HomePage() {
  const [notes, setNotes] = useState([]);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
*/

/*
  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])
*/
