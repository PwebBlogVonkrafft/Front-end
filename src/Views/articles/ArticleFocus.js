import { Grid } from '@material-ui/core';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { StyledCard, StyledButton } from "./styles.js";

function ArticleFocus({ element, onClickShow }) {
  return (
    <StyledCard sx={{ p: 2 }}>
      <Grid container spacing={1} direction="column">
        <Grid item>
          <CardMedia
            component="img"
            height="400"
            image={element.image}
            alt={element.name}
          />
        </Grid>
        <Grid item>
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
        <Grid item>
          <CardActions style={{
            justifyContent: 'flex-end'
          }}>
            <StyledButton onClick={onClickShow}>
              Retour
            </StyledButton>
          </CardActions>
        </Grid>
      </Grid>
    </StyledCard>
  );
}

export default ArticleFocus;