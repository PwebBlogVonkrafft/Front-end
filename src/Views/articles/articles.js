import { Grid } from '@material-ui/core';
import * as React from 'react';
import { useState } from "react";
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArticleCard from "./ArticleCard";
import ArticleFocus from "./ArticleFocus";
import ArticleCardEditable from "./ArticleCardEditable";
import ArticleEdit from "./ArticleEdit";

// Import const
import { newsList } from "../accueil/bdd/data.js";
import { StyledBox, StyledButton, StyledFormControlLabel, StyledSwitch } from "./styles.js";


function Articles() {
  // EditMode decrit le mode de la page Article
  // false: Afficher les articles SANS fonctionalité de modification
  // true: Afficher les articles AVEC fonctionalité de modification
  const [editMode, setEditMode] = useState(false)

  // Focus decrit ce que est affiché dans la page Article
  // -1: liste de tous les articles
  // >= 0: focus dans l'intégralité de l'article avec le valeur de focus
  //       comme id
  const [focus, setFocus] = useState(-1);

  // Edit decrit ce que est affiché dans la page Article si editMode est activé
  // -1: liste de tous les articles
  // >= 0: Editer l'article avec le valeur de edit comme id
  const [edit, setEdit] = useState(-1);

  // Work-around pour forcer le rerender de la component fonction.
  // Appeler le setter pour rerender. Le valeur n'est jamais utilisé
  const [render, forceRender] = useState(false);

  const handleStoreArticle = (element) => {
    newsList[newsList.findIndex(article => article.id === element.id)] = element;
  };

  const handleDeleteArticle = (element) => {
    newsList.splice(newsList.findIndex(article => article.id === element.id), 1);
    forceRender(!render);
  };

  return (
    <StyledBox>
      <Grid container direction="column" spacing={1}>
        <Grid item container justifyContent="flex-end">
          <StyledFormControlLabel
            control={
              <StyledSwitch
                color="secondary"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
              />}
            label="Modifier"
          />
        </Grid>


        {
          // VUE D'ENSEMBLE
          editMode === false && focus === -1 && edit === -1 &&
          <Grid item container spacing={2}>
            {newsList.map(article => (
              <Grid item xs={12}>
                <ArticleCard element={article} onClickShow={setFocus} />
              </Grid>
            )).reverse()}
          </Grid>
        }

        {
          // EDIT MODE - VUE D'ENSEMBLE
          editMode === true && focus === -1 && edit === -1 && /* TODO: afficher seulement pour Admin */
          <Grid item container spacing={2}>
            <Grid item xs={12}>
              <StyledButton
                fullWidth
                startIcon={<AddBoxIcon />}
                sx={{ background: "grey" }}
                onClick={() => {
                  var newArticle = {
                    id: newsList.length,
                    date: "",
                    name: "",
                    corpus: "",
                    image: null,
                    video: null,
                    musique: null,
                  }
                  newsList.push(newArticle)
                  setEdit(newArticle.id)
                }}>
                Ajouter article
              </StyledButton>
            </Grid>

            {newsList.map(article => (
              <Grid item xs={12}>
                <ArticleCardEditable element={article} onClickEdit={setEdit}
                  onClickDelete={handleDeleteArticle} />
              </Grid>
            )).reverse()}
          </Grid>
        }

        {
          // FOCUS ARTICLE
          focus !== -1 &&
          <Grid item>
            <ArticleFocus element={newsList.find(article => article.id === focus)}
              onClickRetour={() => setFocus(-1)} />
          </Grid>
        }

        {
          // EDIT ARTICLE
          edit !== -1 &&
          <Grid item>
            <ArticleEdit element={newsList.find(article => article.id === edit)}
              onClickRetour={() => setEdit(-1)} storeArticle={handleStoreArticle}/>
          </Grid>
        }

      </Grid>
    </StyledBox>
  );
}


export default Articles;
