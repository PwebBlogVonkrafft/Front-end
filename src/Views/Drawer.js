import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
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

  /*
  const navigate = useNavigate();

  //les handleChanges
  const handleMenu0 = () => {
      navigate("/accueil");
  };

  const handleMenu1 = () => {
      navigate("/musiques");
  };

  const handleMenu2 = () => {
      navigate("/videos");
  };

  const handleMenu3 = () => {
      navigate("/articles");
  };

  const handleMenu4 = () => {
      navigate("/calendriers");
  };

  const handleMenu5 = () => {
      navigate("/aPropos");
  };

  const handleMenu6 = () => {
      navigate("/meRetrouver");
  };
  */





  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const indexList = [<HomeIcon/>, <MusicNoteIcon/>, <OndemandVideoIcon/>, <NewspaperIcon/>, <CalendarTodayIcon/>, <AccountCircleIcon/>, <AlternateEmailIcon/>];
  const pathList = ['/accueil', '/musiques', '/videos', '/articles', '/calendriers', '/aPropos' , '/meRetrouver'];


  
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Musiques', 'Videos', 'Articles', 'Calendrier', 'A Propos', 'Me Retrouver'].map((text, index) => (
        
        <Link to = {pathList[index]}> 
            <ListItem button key={text}>
              <ListItemIcon>
                {indexList[index]}
              </ListItemIcon>
              <ListItemText primary={text} />
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
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
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
