import { Grid } from "@material-ui/core";
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from "react";
// Import const
import { newsList } from "../accueil/bdd/data.js";
import { StyledCard } from "./styles.js";




// id: "0",
// date: "8 mars 2022",
// name: "1 million d'abonnés sur Youtube",
// corpus: "Il fallait s'y attendre et, en effet, la chaîne a atteint un million d'abonnés.",
// image: image_0,
// video: video_0,
// musique: musique_0,

function ElementDisplay({ element }) {
  return (
    <div>
      Hello World!
    </div>
  )
}

function ArticleCard({ element, onClick }) {
  return (
    <StyledCard sx={{ p: 2 }}>
      <Grid container spacing={1}>
        <Grid item>
          <CardMedia
            component="img"
            height="200"
            image={element.image}
            alt={element.name}
          />
        </Grid>
        <Grid item>
          <CardContent>
            <Typography variant="h5" component="div">
              {element.name}
            </Typography>
            <Typography gutterBottom variant="subtitle1" color="text.secondary">
              {element.date}
            </Typography>
            <Typography variant="body1" paragraph>
              {element.corpus}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item>
          <CardActions style={{
            justifyContent: 'flex-end'
          }}>
            <Button variant="contained" size="small" color="secondary"
              onClick={onClick}
            >
              Afficher l'article
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </StyledCard>
  );
}

function Articles() {
  // Focus decrit ce que est affiché dans ce tab Article
  // 0: liste de tous les articles
  // 1: focus dans l'intégralité d'un article
  const [focus, setFocus] = useState(0);

  const articleCardList = newsList.map(a => (
    <Grid item xs={12} md={6}>
      <ArticleCard element={a} onClick={() => setFocus(1)} />
    </Grid>
  )).reverse();

  return (
    <div>
      {
        focus === 0 &&
        <Grid container spacing={2}>
          {articleCardList}
        </Grid>
      }
      {
        focus === 1 &&
        <>
          <Typography>
            Focus page.
          </Typography>
          <Button onClick={() => setFocus(0)}>
            Retour
          </Button>
        </>
      }
    </div>
  );
}


export default Articles;
