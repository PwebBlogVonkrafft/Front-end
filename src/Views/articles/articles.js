import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import ArticleFocus from "./ArticleFocus";

// Import const
import { newsList } from "../accueil/bdd/data.js";
import { StyledCard, StyledButton, StyledBox } from "./styles.js";




// id: "0",
// date: "8 mars 2022",
// name: "1 million d'abonnés sur Youtube",
// corpus: "Il fallait s'y attendre et, en effet, la chaîne a atteint un million d'abonnés.",
// image: image_0,
// video: video_0,
// musique: musique_0,





function Articles() {
  // Focus decrit ce que est affiché dans ce tab Article
  // -1: liste de tous les articles
  // >= 0: focus dans l'intégralité de l'article avec le valeur de focus
  //       comme id
  const [focus, setFocus] = useState(-1);

  const articleCardList = newsList.map(article => (
    <Grid item xs={12} /* md={6} */>
      <ArticleCard element={article} onClickShow={setFocus} />
    </Grid>
  )).reverse();

  return (
    <StyledBox>
      {
        // Vue d'ensemble
        focus === -1 &&
        <Grid container spacing={2}>
          {articleCardList}
        </Grid>
      }
      {
        // Vue focus
        focus !== -1 &&
        <>
          <ArticleFocus element={newsList.find(article => article.id == focus)}
            onClickShow={() => setFocus(-1)} />
        </>
      }
    </StyledBox>
  );
}


export default Articles;
