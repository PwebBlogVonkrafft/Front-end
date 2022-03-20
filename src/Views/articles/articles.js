import { Box, Grid, Paper } from "@material-ui/core";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

/*
import img_rhone from "./IMG_4971.jpeg";
import img_lac from "./IMG_3602.jpeg";
import img_neige from "./IMG_4515.jpeg";
*/

// Import const
import {newsList} from "../accueil/bdd/data.js";

/*
const articleList = [
  {
    title: "La Rhône",
    description: "Cette rivière se trouve près du campus.",
    image: img_rhone
  },
  {
    title: "Le lac",
    description: "Ce lac se trouve en Autriche.",
    image: img_lac
  },
  {
    title: "La neige",
    description: "Les alpes près de Munich.",
    image: img_neige
  }
]
*/



function IndividualArticle({article}) {
  return (
    <Card /*sx={{ maxWidth: 345 }}*/>
      <Grid container spacing={1}>
        <Grid item>
          <CardMedia
            component="img"
            height="140"
            image={article.image}
            alt={article.name}
          />
        </Grid>
        <Grid item>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.corpus}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

function Articles() {
  const articleCardList = newsList.map(a => <IndividualArticle article={a} />).reverse();

  return (
    <Box>
      {articleCardList}
    </Box>
  );
}

export default Articles;
