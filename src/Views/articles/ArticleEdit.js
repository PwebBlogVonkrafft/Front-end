import { Button, Grid } from '@material-ui/core';
import { TextField } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import * as React from 'react';
import { useState } from "react";
import { StyledButton, StyledCard } from "./styles.js";

function ArticleEdit({ element, onClickRetour }) {

  const [formValues, setFormValues] = useState(element);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    // TODO: Copy of new values doesn't work yet.
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
              <TextField
                required
                id="titleArticle"
                name="name" // Key to key-value-pair in object to save in
                label="Title"
                fullWidth
                multiline
                rows={2}
                color="secondary"
                value={formValues.name}
                onChange={handleInputChange}
              />
              <TextField
                name='id'
                label='ID'
                value={formValues.id}
                onChange={handleInputChange}
              />
              {/* <Typography variant="h5" component="div">
              {formValues.name}
            </Typography> */}
              <Typography gutterBottom variant="subtitle1" color="text.secondary">
                {formValues.date}
              </Typography>
              <Typography variant="body1" paragraph>
                {formValues.corpus}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs container direction="column" alignContent="flex-end">
            <Grid item xs>
              <CardActions>
                <StyledButton
                  type="submit"
                  startIcon={<SaveIcon />}
                  sx={{
                    background: "green"
                  }}>
                  Enregistrer
                </StyledButton>
                <StyledButton
                  onClick={onClickRetour}
                  startIcon={<CancelIcon />}
                  sx={{
                    background: "red"
                  }}>
                  Annuler
                </StyledButton>
              </CardActions>
            </Grid>
          </Grid>

        </Grid>
      </form>
    </StyledCard>
  );
}

export default ArticleEdit;