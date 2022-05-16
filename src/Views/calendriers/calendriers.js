import { Grid } from '@material-ui/core';
import * as React from 'react';
import { useState } from "react";
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EventCard from "./EventCard";
// import ArticleFocus from "./ArticleFocus";
// import ArticleCardEditable from "./ArticleCardEditable";
// import ArticleEdit from "./ArticleEdit";

// Import const
import { dateList } from "../accueil/bdd/data.js";
import { StyledBox, StyledButton, StyledFormControlLabel, StyledSwitch } from "../styles/styles.js";

function Calendriers() {
  // La construction de la page Calendriers est fortement basé sur la page Article

  const [editMode, setEditMode] = useState(false)
  const [focus, setFocus] = useState(-1);
  const [edit, setEdit] = useState(-1);

  const [render, forceRender] = useState(false);

  // TODO These two handlers only change the newsList object.
  // Manipulation of database still needs to be implemented with axios
  // const handleStoreArticle = (element) => {
  //   newsList[newsList.findIndex(article => article.id === element.id)] = element;
  // };

  // const handleDeleteArticle = (element) => {
  //   newsList.splice(newsList.findIndex(article => article.id === element.id), 1);
  //   forceRender(!render);
  // };

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
            {dateList.map(article => (
              <Grid item xs={12}>
                <EventCard element={article} onClickShow={setFocus} />
              </Grid>
            )).reverse()}
          </Grid>
        }

        {/* {
          // EDIT MODE - VUE D'ENSEMBLE
          // TODO Afficher edit mode seulement pour Admin
          editMode === true && focus === -1 && edit === -1 && 
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
        } */}

      </Grid>
    </StyledBox>
  );
}

export default Calendriers;

