import { Grid } from '@material-ui/core';
import * as React from 'react';
import { useState } from "react";
import Typography from '@mui/material/Typography';
import ArticleCard from "./ArticleCard";
import ArticleFocus from "./ArticleFocus";

// Import const
import { newsList } from "../accueil/bdd/data.js";
import { StyledBox, StyledButton, StyledFormControlLabel, StyledSwitch } from "./styles.js";




// id: "0",
// date: "8 mars 2022",
// name: "1 million d'abonnés sur Youtube",
// corpus: "Il fallait s'y attendre et, en effet, la chaîne a atteint un million d'abonnés.",
// image: image_0,
// video: video_0,
// musique: musique_0,





function Articles() {
  // Edit decrit le mode de la page Article
  // false: Show - Afficher les articles
  // true: Edit - Editer les articles
  const [edit, setEdit] = useState(false)

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
      <StyledFormControlLabel
        control={
          <StyledSwitch
            color="secondary"
            checked={edit}
            onChange={() => setEdit(!edit)}
          />}
        label="Modifier"
      />

      {
        // VUE D'ENSEMBLE
        edit == false && focus === -1 &&
        <Grid container spacing={2}>
          {articleCardList}
        </Grid>
      }

      {
        // VUE FOCUS
        edit == false && focus !== -1 &&
        <>
          <ArticleFocus element={newsList.find(article => article.id === focus)}
            onClickShow={() => setFocus(-1)} />
        </>
      }

      {
        // EDIT - EDITER LES ARTICLES
        edit == true &&
        <Typography>
          Editor view
        </Typography>
      }
    </StyledBox>
  );
}


export default Articles;
