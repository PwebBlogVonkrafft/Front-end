import * as React from 'react';
import { useState } from 'react';
import {
  Container,
} from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

//les fonctions import
import Login from './example/login';
import VerticalTabs from './example/vertical_tabs';
import BasicTable from './example/basic_table';
import MediaControlCard from './example/media_control_card';
import InitialFilters from './example/initial_filters';
import SimpleGrow from './example/simple_grow';
import SkeletonTest from './example/skeleton_test';

import Accueil from './accueil/accueil.js';



function HomePage() {
    //constante hook , menu va changer dynamiquement de valeur avec setMenu en utilisant des handleChange
    //les boutons qui vont être appeler dans le render vont faire appelle aux fonctions handelMenui,
    //qui affectent la valeur i à menu 
    //ensuite on affiche la fonction "import ..." qui correspond à la valeur i selectionner  
    const [menu, setMenu] = useState(0);

    /*********************************************/
    //les handleChanges
    const handleMenu0 = () => {
        setMenu(0);
    };

    const handleMenu1 = () => {
        setMenu(1);
    };

    const handleMenu2 = () => {
        setMenu(2);
    };

    const handleMenu3 = () => {
        setMenu(3);
    };

    const handleMenu4 = () => {
        setMenu(4);
    };

    const handleMenu5 = () => {
        setMenu(5);
    };

    const handleMenu6 = () => {
        setMenu(6);
    };
    /*********************************************/
    return (
        <Container>
        
            <div>
                <AppBar color="secondary" position="static" sx={{alignItems: 'center'}}>
                    <Toolbar>

                        <div>
                            <Button 
                                color="inherit"
                                //pour faire appelle à la fonction handleMenu on utilise onClick 
                                //le bouton Acceuil va dynamiquement affecter la valeur 0 à la constante menu 
                                onClick={handleMenu0}
                            >
                                Acceuil
                            </Button>
                        </div>
                        <div>
                            <Button 
                                color="inherit"
                                onClick={handleMenu1}
                            >
                                Musiques
                            </Button>
                        </div>
                        <div>
                            <Button 
                                color="inherit"
                                onClick={handleMenu2}
                            >
                                Vidéos
                            </Button>
                        </div>
                        <div>
                            <Button 
                                color="inherit"
                                onClick={handleMenu3}
                            >
                                Articles
                            </Button>
                        </div>
                        <div>
                          <Button 
                            color="inherit"
                            onClick={handleMenu4}
                          >
                            Calendrier
                          </Button>
                        </div>
                        <div>
                          <Button 
                            color="inherit"
                            onClick={handleMenu5}
                          >
                            Biographie
                          </Button>
                        </div>
                        <div>
                          <Button 
                            color="inherit"
                            onClick={handleMenu6}
                          >
                            Me retrouver
                          </Button>
                        </div>            
                    </Toolbar>
                </AppBar>
            </div>

            <div>
                {   //si menu == 0 alors on affiche la fonction "Login"
                    menu === 0 && <div> <Accueil/></div>
                }
                {
                    menu === 1 && <div> <VerticalTabs/> </div>
                }
                {
                    menu === 2 && <div> <MediaControlCard/> </div>
                }
                {
                    menu === 3 && <div> <SimpleGrow/> </div>
                }
                {
                    menu === 4 && <div> <BasicTable/> </div>
                }
                {
                    menu === 5 && <div> <SkeletonTest/> </div>
                }
                {
                    menu === 6 && <div> <InitialFilters/> </div>
                }
            </div>
        
        </Container>
    );
}

export default HomePage;





 
