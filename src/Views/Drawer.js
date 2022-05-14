// Menu dans la barre latérale
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicTwoToneIcon from '@mui/icons-material/LibraryMusicTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import NewspaperTwoToneIcon from '@mui/icons-material/NewspaperTwoTone';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { Link } from 'react-router-dom';



export default function TemporaryDrawer() {

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
// Construction de l'élément : icône + lien, + texte (ligne 48)
  const indexList = [<HomeIcon color="secondary" sx={{ fontSize: 40 }}/>, <LibraryMusicTwoToneIcon color="secondary" sx={{ fontSize: 40 }}/>, <OndemandVideoTwoToneIcon color="secondary" sx={{ fontSize: 40 }}/>, <NewspaperTwoToneIcon color="secondary" sx={{ fontSize: 40 }}/>, <TodayTwoToneIcon color="secondary" sx={{ fontSize: 40 }}/>, <AccountCircleIcon color="secondary" sx={{ fontSize: 40 }}/>, <AlternateEmailIcon color="secondary" sx={{ fontSize: 40 }}/>];
  const pathList = ['/', '/musiques', '/videos', '/articles/-1', '/calendriers', '/aPropos' , '/meRetrouver'];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Musiques', 'Videos', 'Articles', 'Calendrier', 'A Propos', 'Me Retrouver'].map((text, index) => (
        <Link to = {pathList[index]} style={{ textDecoration: 'none' }}> {/*Pour supprimer l'affichage du lien souligné*/}
            <ListItem key={text}>
              <ListItemIcon>
                {indexList[index]}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: 'text.primary', display: 'inline', fontSize: 14 }}/>
            </ListItem>
        </Link>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon sx={{ color: 'white' }}/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
