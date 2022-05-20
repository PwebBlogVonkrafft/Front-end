import { Box, Button, Grid } from '@material-ui/core';
import FacebookIcon from '@mui/icons-material/Facebook';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { getCurrentDateConcert } from '../accueil/composants/dateToString.js';
import { StyledCard } from "../styles/styles.js";


function EventCard({ element }) {
  return (
    <StyledCard sx={{ p: 2 }}>
      <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item xs={6} sm={3}>
          <Box sx={{ p: 1, backgroundColor: "#009688", borderRadius: "4px" }}>
            <Typography variant="h6" sx={{ lineHeight: "24px" }} color="white">
              <Box sx={{ fontWeight: 'bold' }}>{element.name}</Box>
            </Typography>
          </Box>
        </Grid>
        <Grid ite xs={6} sm={2}>
          <Typography variant="h6" color="text.secondary">
            {getCurrentDateConcert(element)}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">
            {element.lieu}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Button
            startIcon={<NewspaperIcon />}
            variant="outlined"
            fullWidth
            disabled={element.article === ""}
            onClick={(e) => {
              e.preventDefault();
              window.open(element.article, '_blank');
            }}>
            Article
          </Button>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Button
            startIcon={<FacebookIcon />}
            variant="outlined"
            disabled={element.liens_facebook === ""}
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.open(element.liens_facebook, '_blank');
            }}>
            Facebook
          </Button>
        </Grid>
      </Grid>
    </StyledCard >
  );
}

export default EventCard;