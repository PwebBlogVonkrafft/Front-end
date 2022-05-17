import {  Grid } from '@material-ui/core';
import CardContent from '@mui/material/CardContent';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import * as React from 'react';
import { useState } from "react";
import { StyledButton, StyledCard, StyledTextField } from "../styles/styles.js";

function EventEdit({ element, onClickRetour, storeEvent }) {

  const [formValues, setFormValues] = useState(element);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const d = new Date();

    setFormValues({
      ...formValues,
      [name]: value,
      ["date"]: d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear(),
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
    storeEvent(formValues)
    onClickRetour();
  };

  return (
    <StyledCard sx={{ p: 2 }}>
      <form noValidate autoComplete='off' onSubmit={handleSubmit} style={{ flex: 1 }}>
        <Grid container direction="row" spacing={1}>
          <Grid item sm={7}>
            <CardContent>

              <StyledTextField
                id="titleEvent"
                name="name" // Key to key-value-pair in object to save in
                label="Titre"
                fullWidth
                color="secondary"
                value={formValues.name}
                onChange={handleInputChange}
              />

              <StyledTextField
                id="dateConcertEvent"
                name="date_concert" // Key to key-value-pair in object to save in
                label="Date"
                color="secondary"
                value={formValues.date_concert}
                onChange={handleInputChange}
              />

              <StyledTextField
                id="lieuEvent"
                name="lieu" // Key to key-value-pair in object to save in
                label="Lieu"
                fullWidth
                color="secondary"
                value={formValues.lieu}
                onChange={handleInputChange}
              />

            </CardContent>
          </Grid>
          <Grid item sm={5}>
            <CardContent>

              <StyledTextField
                id="articleEvent"
                name="article" // Key to key-value-pair in object to save in
                label="Lien vers l'article"
                fullWidth
                color="secondary"
                value={formValues.article}
                onChange={handleInputChange}
              />

              <StyledTextField
                id="liens_facebookEvent"
                name="liens_facebook" // Key to key-value-pair in object to save in
                label="Lien vers l'event facebook"
                fullWidth
                color="secondary"
                value={formValues.liens_facebook}
                onChange={handleInputChange}
              />


              <Grid container direction="row" spacing={2}>
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
            </CardContent>
          </Grid>
        </Grid>
      </form>
    </StyledCard>
  );
}

export default EventEdit;