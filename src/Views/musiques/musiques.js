import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';



import { musiqueList } from "../accueil/bdd/data.js";
import { Grid, Paper, Tab, Tabs } from '@mui/material';

const Musique = ({musique}) => {

  const theme = useTheme();

  return (
    <Paper
    elevation={0}
    sx={{
      p: 5,
      margin: 'auto',
      maxWidth: 750,
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
    >
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        <Card sx={{ display: 'flex' }}>
          <Grid container spacing={2}>
            <Grid item>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    {musique.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    Dorian VonKrafft
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <IconButton aria-label="previous">
                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                  </IconButton>
                  <IconButton aria-label="play/pause">
                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                  </IconButton>
                  <IconButton aria-label="next">
                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                  </IconButton>
                </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={musique.image_de_couverture}
                alt={musique.name}
              />
            </Grid>
          </Grid>
        </Card>

      </Box>
    </Paper>
  );
}

function Musiques() {
  const musique_List = musiqueList.map(a => <Musique musique = {a} />);
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return ( 
    
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Album 1" />
          <Tab value="two" label="Album 2" />
          <Tab value="three" label="Album 3" />
        </Tabs>
        {musique_List}
      </Box>
    );
}





export default Musiques;

