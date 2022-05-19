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
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {Howl, Howler} from "howler";
import AudioPlayer from "react-h5-audio-player";
import { StyledPaper } from './styles.js';
import { musiqueList } from "../accueil/bdd/data.js";
import { Button, Grid, Paper, Stack, Tab, Tabs } from '@mui/material';

function SoundPlay(src) {
  const sound = new Howl({
    src
  })
  sound.play();
}
const Musique = ({musique}) => {

  const theme = useTheme();
  const [trackIndex, setTrackIndex] = React.useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musiqueList.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musiqueList.length - 1 ? currentTrack + 1 : 0
    );
  };
  return (
    <StyledPaper elevation={10} sx={{ my: 3, mx: 'auto', p: 5, }}>
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
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
                <AudioPlayer
                 // style={{ width: "300px" }}
                  
                  style={{ borderRadius: "1rem" }} 
                  autoPlay
                  // layout="horizontal"
                  src={musiqueList[trackIndex].file_name}
                  onPlay={(e) => console.log(musiqueList[trackIndex].file_name)}
                  showSkipControls={true}
                  showJumpControls={false}
                  onClickPrevious={handleClickPrevious}
                  onClickNext={handleClickNext}
                  onEnded={handleClickNext}
              />
              </Box>
            <CardMedia
              component="img"
              sx={{ width: 200, alignItems: 'center' }}
              image={musique.image_de_couverture}
              alt={musique.name}
            />
          </Grid>
        </Grid>
      </Box>
      <Grid item xs={12}>
      <Typography sx={{ cursor: 'pointer'}} color="common.white" variant="body2">
        <Stack direction="row" spacing={2}>
          <Button 
              rightcentered
              color="secondary" 
              variant="contained" 
              endIcon={<AttachMoneyIcon />} 
              >
              Acheter
            </Button>
         </Stack>
        </Typography>
      </Grid>
    </StyledPaper>

  );
}

function Musiques() {

  const [songs, setSongs] = React.useState([musiqueList.map(a => <Musique musique = {a} />)]);
  const [value, setValue] = React.useState('one');

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleMusicPlayer = function(e) {

  }

  return ( 
    <div className="Musiques">
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, alignContent: 'left'}}> 
        <Tabs
          value={value}
          onChange={handleChangeTabs}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Album 1" />
          <Tab value="two" label="Album 2" />
          <Tab value="three" label="Album 3" />
        </Tabs>
        {songs}
      </Box>
    </div>
 );
}





export default Musiques;

