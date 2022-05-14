// Section Back-end (bdd)
import image_0 from "./images/image_0.jpeg";
import image_1 from "./images/image_1.jpeg";
import img_couverture_musique_0 from "./images_de_couverture_musiques/img_couverture_musique_0.jpeg";
import img_couverture_musique_1 from "./images_de_couverture_musiques/img_couverture_musique_1.jpeg";
import img_couverture_video_0 from "./images_de_couverture_videos/img_couverture_0.jpeg";
import img_couverture_video_1 from "./images_de_couverture_videos/img_couverture_1.jpeg";



const musique_0 = new Audio("./musique/musique_0.mp3");
const musique_1 = new Audio("./musique/musique_1.mp3");

const video_0 = {
  src: "./videos/video_0.mp4",
  type:'video/mp4'
 };

const video_1 = {
src: "./videos/video_1.mp4",
type:'video/mp4'
};

const newsList = [
    {
      id: "0",
      date: "2013-05-23T18:25:43.511Z",
      name: "1 million d'abonnés sur Youtube",
      corpus: "Il fallait s'y attendre et, en effet, la chaîne a atteint un million d'abonnés.",
      image: image_0,
      video: video_0,
      musique: musique_0,
    },
    {
      id: "1",
      date: "2013-04-23T18:25:43.511Z",
      name: "Super maxi concert",
      corpus: "Un grand succès, avec beaucoup de monde, de lumières et de musique, au nom de la passion.",
      image: image_1,
      video: video_1,
      musique: musique_1,
    }
  ]

  const dateList = [
    {
      id: "0",
      date: "2013-04-23T18:25:43.511Z",
      name: "Concert du 10 mars",
      date_concert: "2015-04-23T18:25:43.511Z",
      lieu: "Chez toi",
      article: "https://www.nova.fr/news/sautoproduire-pour-se-lancer-loin-de-la-route-de-lor-123592-20-01-2021/?fbclid=IwAR3z41B-hapLamYeNSnF5wAbkT_hrUYpFkIbQxzugpSU3yulgH8Ydq-IqiI",
      liens_facebook: "https://www.facebook.com/DVKrafft/",
    },
    {
      id: "1",
      date: "2012-04-23T18:25:43.511Z",
      name: "Concert pour Jessica",
      date_concert: "2013-07-23T18:25:43.511Z",
      lieu: "Chez moi",
      article: "https://www.deezer.com/fr/album/162103962?fbclid=IwAR1S8inaOwRdkEExN06T7XkwIRfia14ZtCWxDTC5ALw2Gqyk02ldigWNLeU",
      liens_facebook: "https://www.facebook.com/DVKrafft/photos/?ref=page_internal",
    }
  ]

  const videoList = [
    {
      id: "0",
      date: "2013-10-23T18:25:43.511Z",
      name: "SOLE - DORIAN VONKRAFFT (MUSIC VIDEO)",
      description: "Hello everyone, this is I, Dorian VonKrafft. I made a little music video for my latest record.",
      file_name: video_0,
      image_de_couverture: img_couverture_video_0,
    },
    {
      id: "1",
      date: "2013-08-23T18:25:43.511Z",
      name: "[Live Looping] The answer by Dorian VonKrafft on Boss RC-300 (with lyrics !)",
      description: "The answer is the bonus track of my EP 'Muffled Frustrations'. Now that I played all the songs of Muffled Frustrations, I will play other creations along with improvisations and some covers. If you have any recommendations send me a message or comment on my videos ! ",
      file_name: video_0,
      image_de_couverture: img_couverture_video_1,
    }
  ]

  const musiqueList = [
    {
      id: "0",
      date: "2013-05-23T18:25:43.511Z",
      name: "[Live Looping] Iano by Dorian VonKrafft on Boss RC-300 (with lyrics !)",
      description: "Very proud to show you today my most precious song, the first one I ever recorded for my EP 'Muffled Frustrations'.",
      file_name: musique_0,
      image_de_couverture: img_couverture_musique_0,
    },
    {
      id: "1",
      date: "2013-07-23T18:25:43.511Z",
      name: "[Live Looping] Little improvisation on Boss RC-300 by Dorian VonKrafft",
      description: "In order to keep you waiting for the following live sessions of my album, here is a little video I did on one shot based on a chord progression you can hear on Stolen Dance by Milky Chance ! ",
      file_name: musique_1,
      image_de_couverture: img_couverture_musique_1,
    }
  ]

export { newsList, dateList, videoList, musiqueList };
