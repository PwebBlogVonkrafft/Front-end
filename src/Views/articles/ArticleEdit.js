import { Grid } from '@material-ui/core';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import UploadIcon from '@mui/icons-material/Upload';
import * as React from 'react';
import { useState } from "react";
import { StyledButton, StyledCard, StyledTextField } from "../styles/styles.js";

function ArticleEdit({ element, onClickRetour, storeArticle }) {

  const [formValues, setFormValues] = useState(element);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleUploadImage = (e) => {
    // TODO: Only path to image is changed. Entire image needs to change and be loaded into database on submit.
    // Explained with axios here: https://www.youtube.com/watch?v=sp9r6hSWH_o
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues)
    storeArticle(formValues)
    onClickRetour();
  };

  return (
    <StyledCard sx={{ p: 2 }}>
      <form noValidate autoComplete='off' onSubmit={handleSubmit} style={{ flex: 1 }}>
        <Grid container direction="row" spacing={1}>
          <Grid item sm={7}>
            <CardContent>

              <StyledTextField
                id="titleArticle"
                name="name" // Key to key-value-pair in object to save in
                label="Titre"
                fullWidth
                color="secondary"
                value={formValues.name}
                onChange={handleInputChange}
              />

              <StyledTextField
                id="dateArticle"
                name="date" // Key to key-value-pair in object to save in
                label="Date"
                color="secondary"
                value={formValues.date}
                onChange={handleInputChange}
              />

              <StyledTextField
                id="corpusArticle"
                name="corpus" // Key to key-value-pair in object to save in
                label="Corpus"
                fullWidth
                multiline
                rows={6}
                color="secondary"
                value={formValues.corpus}
                onChange={handleInputChange}
                sx={{ marginBottom: 0 }}
              />

            </CardContent>
          </Grid>
          <Grid item sm={5} container direction="column" spacing={2}>
            <Grid item>
              <CardMedia
                component="img"
                height="200"
                image={element.image}
                alt={element.name}
                sx={{ marginTop: 2 }}
              />
            </Grid>

            {/* TODO Possibility to upload videos or music. Implementation when connection
            to database works. */}

            <Grid item>
              <StyledButton
                fullWidth
                component="label"
                startIcon={<UploadIcon />}
              >
                {" "}
                Telecharger image
                <input type="file" name="image" onChange={handleUploadImage} hidden />
              </StyledButton>
            </Grid>

            <Grid item container direction="row" spacing={2}>
              <Grid item xs={6}>
                <StyledButton
                  type="submit"
                  startIcon={<SaveIcon />}
                  fullWidth
                  sx={{
                    background: "green"
                  }}>
                  Enregistrer
                </StyledButton>
              </Grid>
              <Grid item xs={6}>
                <StyledButton
                  onClick={onClickRetour}
                  startIcon={<CancelIcon />}
                  fullWidth
                  sx={{
                    background: "red"
                  }}>
                  Annuler
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </StyledCard>
  );
}

export default ArticleEdit;