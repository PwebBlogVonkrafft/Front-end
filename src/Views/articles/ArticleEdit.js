import { Button, Grid } from '@material-ui/core';
import { TextField } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import UploadIcon from '@mui/icons-material/Upload';
import * as React from 'react';
import { useState } from "react";
import { StyledButton, StyledCard, StyledTextField } from "./styles.js";

function ArticleEdit({ element, onClickRetour }) {

  const [formValues, setFormValues] = useState(element);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleUploadImage = (e) => {
    // TODO: Only path to image is changed. Entire image needs to change
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    // TODO: Copy of new values doesn't work yet. How are they stored in BDD???
    event.preventDefault();
    element = formValues;
    console.log(formValues);
    console.log(element);
    onClickRetour();
  };

  return (
    <StyledCard sx={{ p: 2 }}>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={8}>
            <CardContent>

              <StyledTextField
                required
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
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <CardMedia
                component="img"
                height="200"
                image={element.image}
                alt={element.name}
                sx={{ marginTop: 2 }}
              />
            </Grid>

            <Grid item xs>
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

            <Grid item xs container direction="row">
              <Grid item xs>
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
              <Grid item xs />
              <Grid item xs>
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