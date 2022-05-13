import * as React from 'react';
import { dateList, musiqueList, newsList, videoList } from "../bdd/data";
import { DateGrid, DerniereNewsCard, MusiqueGrid, VideoGrid } from "./blocFonctionnel";

// Fonction pour obtenir la dernière news depuis data.js
function News() {
    const newsCardList = newsList.map(a => <DerniereNewsCard news={a} />);
    /*Les maps sont itérables et ordonnées, mais ce ne sont pas des tableaux, elles n'ont donc aucun accès indexé. On itérer donc jusqu'à l'élément final. */
    const getLastItemInMapNews = Array.from(newsCardList.values()).pop();
    return (
      <div>
        {getLastItemInMapNews}
      </div>
    );
  }
  
  // Fonction pour obtenir la dernière date depuis data.js
  function Day() {
    const dateCardList = dateList.map(a => <DateGrid dates={a} />);
    /*Les maps sont itérables et ordonnées, mais ce ne sont pas des tableaux, elles n'ont donc aucun accès indexé. On itérer donc jusqu'à l'élément final. */
    const getLastItemInMapDate = Array.from(dateCardList.values()).pop();
    return (
      <div>
        {getLastItemInMapDate}
      </div>
    );
  }
  
  // Fonction pour obtenir la dernière vidéo depuis data.js
  function Video() {
    const videoCardList = videoList.map(a => <VideoGrid videos={a} />);
    /*Les maps sont itérables et ordonnées, mais ce ne sont pas des tableaux, elles n'ont donc aucun accès indexé. On itérer donc jusqu'à l'élément final. */
    const getLastItemInMapVideo = Array.from(videoCardList.values()).pop();
    return (
      <div>
        {getLastItemInMapVideo}
      </div>
    );
  }
  
  // Fonction pour obtenir la dernière musique depuis data.js
  function Musique() {
    const musiqueCardList = musiqueList.map(a => <MusiqueGrid musiques={a} />);
    /*Les maps sont itérables et ordonnées, mais ce ne sont pas des tableaux, elles n'ont donc aucun accès indexé. On itérer donc jusqu'à l'élément final. */
    const getLastItemInMapMusique = Array.from(musiqueCardList.values()).pop();
    return (
      <div>
        {getLastItemInMapMusique}
      </div>
    );
  }

  export { News, Day, Video, Musique };






/*
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