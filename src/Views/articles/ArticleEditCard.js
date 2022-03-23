import { Grid } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { StyledCard, StyledButton } from "./styles.js";

function ArticleCard({ element, onClickShow }) {
  return (
    <StyledCard sx={{ p: 2 }}>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={8}>
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
        <Grid item xs container direction="column" alignContent="flex-end">
          <Grid item xs>
            <CardActions>
            <StyledButton>
                Fold
              </StyledButton>
              <StyledButton>
                Delete
              </StyledButton>
            </CardActions>
          </Grid>
        </Grid>

      </Grid>
    </StyledCard>
  );
}

export default ArticleCard;