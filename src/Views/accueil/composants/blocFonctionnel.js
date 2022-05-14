import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import ButtonBase from '@mui/material/ButtonBase';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse"; // Section de texte extensible
import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton";
import Paper from '@mui/material/Paper';
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { getCurrentDate, getCurrentDateConcert } from "./dateToString";

// Mise en forme de l'objet "icône fonctionnelle"
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



// Mise en forme de l'objet "images"
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });



// Fonction de la section "Dernière news"
const DerniereNewsCard = ({news}) => {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
    
    return (
      <Card 
        elevation={0}
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
                <Img alt="Image de la news" src={news.image} />
              </Stack>
            </ButtonBase>
          </Grid>
  
          <Grid item xs={12} sm container>
            <CardHeader
              title={news.name}
              subheader={getCurrentDate(news)}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              <Typography paragraph>Appuyez pour en savoir plus :</Typography>
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
            <Typography paragraph>
              {news.corpus}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
  
  
  
  // Fonction de la section "Dernière date"
  const DateGrid = ({dates}) => { 
    return (
      <Paper
        elevation={0}
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
              <Avatar sx={{ width: 110, height: 110, bgcolor: grey[400],}}>{getCurrentDateConcert(dates)}</Avatar>
            </Stack>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <CardHeader
                  title={dates.name}
                  subheader={getCurrentDate(dates)}
                />
                <Typography variant="body2" color="text.secondary">
                  Lieu : {dates.lieu}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer'}} color="common.white" variant="body2">
                  <Stack direction="row" spacing={2}>
                  <Button 
                      color="secondary" 
                      variant="contained" 
                      endIcon={<SendIcon />} 
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = dates.article;
                      }}>
                      Accédez à l'article online
                    </Button>
  
                    <Button 
                      color="secondary" 
                      variant="contained" 
                      endIcon={<SendIcon />} 
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = dates.liens_facebook;
                      }}>
                      Accédez au post Facebook
                    </Button>
                  </Stack>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                {/* Possibilité d'ajouter du texte*/} 
              </Typography>
              
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
  
  
  
  // Fonction de la section "Dernière vidéo"
  const VideoGrid = ({videos}) => {
    return (
      <Paper
        elevation={0}
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
              <Img alt="Image de la vidéo" src={videos.image_de_couverture} />
            </Stack>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <CardHeader
                  title={videos.name}
                  subheader={getCurrentDate(videos)}
                />
                <Typography variant="body2" color="text.secondary">
                  {videos.description}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer'}} color="common.white" variant="body2">
                  <Stack direction="row" spacing={2}>
                    <Button color="secondary" variant="contained" endIcon={<SendIcon />}>
                      Regardez-la maintenant
                    </Button>
                  </Stack>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                {/* Possibilité d'ajouter du texte*/} 
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
  
  
  
  // Fonction de la section "Dernière musique"
  const MusiqueGrid = ({musiques}) => {
    return (
      <Paper
        elevation={0}
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
              <Img alt="Image de la musique" src={musiques.image_de_couverture} />
            </Stack>
              {/*<CardMedia
                component="iframe"
                image="https://www.youtube.com/embed/2WPYPg-iDrk"
              />*/}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <CardHeader
                  title={musiques.name}
                  subheader={getCurrentDate(musiques)}
                />
                <Typography variant="body2" color="text.secondary">
                  {musiques.description}
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
                {/* Possibilité d'ajouter du texte*/} 
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }

  export { DerniereNewsCard, DateGrid, VideoGrid, MusiqueGrid };
