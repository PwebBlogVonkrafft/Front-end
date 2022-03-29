import { Button, Grid } from '@material-ui/core';
import { TextField } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import * as React from 'react';
import { StyledButton, StyledCard } from "./styles.js";

function ArticleEdit({ element, onClickRetour }) {

  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
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
                name="titleArticle"
                label="Title"
                fullWidth
                multiline
                rows={2}
                color="secondary"
                value={element.name}
                onChange
              />
              {/* <Typography variant="h5" component="div">
              {element.name}
            </Typography> */}
              <Typography gutterBottom variant="subtitle1" color="text.secondary">
                {element.date}
              </Typography>
              <Typography variant="body1" paragraph>
                {element.corpus}
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