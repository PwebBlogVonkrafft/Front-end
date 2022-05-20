import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import Accueil from './accueil/accueil.js';
import Admin from "./admin.js";
import Articles from './articles/articles';
import APropos from "./a_propos/a_propos";
import Calendriers from "./calendriers/calendriers";
import HomePage from "./home_page.js";
import MeRetrouver from "./me_retrouver/me_retrouver";
import Musiques from "./musiques/musiques";
import Videos from "./videos/videos";

//to={`/article/${-1}`}


const App = () => {

  const [showNav, setShowNav] = useState(true);

    let routes = useRoutes([
      { 
        path: '/', 
        element: <HomePage />,
        children: [
        { 
          path: '/', 
          element: <Accueil /> 
        },
        { 
          path: '/musiques', 
          element: <Musiques /> 
        },
        { 
          path: '/videos', 
          element: <Videos/> 
        },
        { 
          path: '/articles/:idLast', 
          element: <Articles/> 
        },
        { 
          path: '/calendriers', 
          element: <Calendriers/> 
        },
        { 
          path: '/aPropos', 
          element: <APropos/> 
        },
        { 
          path: '/meRetrouver', 
          element: <MeRetrouver/> 
        }
      ]
      }
    ]);
    //return routes;
    return (
      showNav === true? <Admin funcNav={setShowNav}/> : routes
    );
}

  export default App;





    

  
