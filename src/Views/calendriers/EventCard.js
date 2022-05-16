import { Box, Button, Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { StyledCard, StyledButton } from "../styles/styles.js";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FacebookIcon from '@mui/icons-material/Facebook';

// {
//   id: "0",
//   date: "8 mars 2022", // just take time stamp of last change. Not modifiable by user.
//   name: "Concert du 10 mars",
//   date_concert: "10 mars 2022",
//   lieu: "Chez toi",
//   article: "https://www.nova.fr/news/sautoproduire-pour-se-lancer-loin-de-la-route-de-lor-123592-20-01-2021/?fbclid=IwAR3z41B-hapLamYeNSnF5wAbkT_hrUYpFkIbQxzugpSU3yulgH8Ydq-IqiI",
//   liens_facebook: "https://www.facebook.com/DVKrafft/",
// }

function EventCard({ element, onClickShow }) {
  return (
    <StyledCard sx={{ p: 2 }}>
      <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item xs={6} sm={3}>
          <Box sx={{ p: 1, backgroundColor: "#009688", borderRadius: "4px" }}>
            <Typography variant="h6" sx={{ lineHeight: "24px" }} color="white">
              {element.name}
            </Typography>
          </Box>
        </Grid>
        <Grid ite xs={6} sm={2}>
          <Typography variant="h6" color="text.secondary">
            {element.date_concert}
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
            onClick={(e) => {
              e.preventDefault();
              window.location.href = element.article;
            }}>
            Article
          </Button>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Button
            startIcon={<FacebookIcon />}
            variant="outlined"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = element.article;
            }}>
            Facebook
          </Button>
        </Grid>
      </Grid>
    </StyledCard >
  );
}

export default EventCard;