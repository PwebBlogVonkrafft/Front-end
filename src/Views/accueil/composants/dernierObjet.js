import { Button } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { dateList, musiqueList, newsList, videoList } from "../bdd/data";
import { DateGrid, DerniereNewsCard, MusiqueGrid, VideoGrid } from "./blocFonctionnel";


// Fonction pour obtenir la dernière news depuis data.js
function News() {
  /*Les maps sont itérables et ordonnées, mais ce ne sont pas des tableaux, elles n'ont donc aucun accès indexé. On itérer donc jusqu'à l'élément final. */
  const max = Math.max(...newsList.map(o => Date.parse(o.date)), 0);  // Pour avoir la date maximale
  let navigate = useNavigate();
  
  const maxId = Math.max(...newsList.map(o => o.id), 0);
  const maxIdString = maxId.toString();

  const  handleMenuLastNews = () => {
    navigate("/articles/" + maxIdString);
  };
  
  return(
    <div>
      {
        newsList.filter(nouvelle => Date.parse(nouvelle.date) === max).map(nouvelle => <DerniereNewsCard news={nouvelle}/>) 
      }
      <Button 
        color="inherit"
        onClick={handleMenuLastNews}
      >
        Lire l'article
      </Button>
    </div>
  );
}
  
// Fonction pour obtenir la dernière date depuis data.js
function Day() {
  const max = Math.max(...dateList.map(o => Date.parse(o.date)), 0);  // Pour avoir la date maximale
  let navigate = useNavigate();
  
  const  handleMenuLastDate = () => {
    navigate('/calendriers');
  };
  
  return(
    <div>
      {
        // Il peut y avoir un double si exactement la même date
      }
      {
        dateList.filter(nouvelle => Date.parse(nouvelle.date) === max).map(nouvelle => <DateGrid dates={nouvelle}/>) 
      }
      <Button 
        color="inherit"
        onClick={handleMenuLastDate}
      >
        Retrouver l'événement dans le calendrier
      </Button>
    </div>
  );
}
  
// Fonction pour obtenir la dernière vidéo depuis data.js
function Video() {
  const max = Math.max(...videoList.map(o => Date.parse(o.date)), 0);  // Pour avoir la date maximale
  return(
    <div>
      {
        videoList.filter(nouvelle => Date.parse(nouvelle.date) === max).map(nouvelle => <VideoGrid videos={nouvelle}/>) 
      }
    </div>
  );
}
  
// Fonction pour obtenir la dernière musique depuis data.js
function Musique() {
  const max = Math.max(...musiqueList.map(o => Date.parse(o.date)), 0);  // Pour avoir la date maximale
  return(
    <div>
      {
        musiqueList.filter(nouvelle => Date.parse(nouvelle.date) === max).map(nouvelle => <MusiqueGrid musiques={nouvelle}/>) 
      }
    </div>
  );
}

export { News, Day, Video, Musique };



/* TEST
// Fonction pour obtenir le dernier objet depuis data.js

export default DernierObjet(DerniereCard, newList){
    const cardList = newList.map(a => <DerniereCard element={a} />);
    const getLastItemInMap = Array.from(cardList.values()).pop();
    return (
        <div>
          {getLastItemInMap}
        </div>
    );
  }
*/