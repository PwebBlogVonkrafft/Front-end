import { Button, List, ListItem } from "@material-ui/core";
import { purple } from "@mui/material/colors";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
/* eslint eqeqeq: 0 */

export default function Admin(props) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if(nom == "dorian" && MotDePasse == "poupard"){
      props.funcNav(false);
      navigate("/");
    }
    else {
      setNom('');
      setMotDePasse('');
    }
  }

  const [nom, setNom] = useState('');
  const [MotDePasse, setMotDePasse] = useState('');

  const inputRefNom = useRef();
  const inputRefMotDePas = useRef();

  const submitHandlerNom = (e) => {
    e.preventDefault();
    setNom(inputRefNom.current.value);
  }

  const submitHandlerMotDePas = (e) => {
    e.preventDefault();
    setMotDePasse(inputRefMotDePas.current.value);
  }

  // Affichage
  const [typerUtilisateur, setTyperUtilisateur] = useState(0);

  const handleClickType = () => {
    setTyperUtilisateur(0);
  };
  
  const handleClickAdmin = () => {
    setTyperUtilisateur(1);
  };

  const handleClickUtilisateur = () => {
    setTyperUtilisateur(2);
  };

  return (
    <div>
      {
        typerUtilisateur == 0 &&
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
          <Button 
              variant="contained" 
              style={{
                color : purple[500],
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={handleClickAdmin}
          >
            Admin
          </Button>
      
          <Button 
              variant="contained"
              style={{
                color : purple[500],
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onClick={handleClickUtilisateur}
          >
            Utilisateur
          </Button>
        </div>
      }

      { 
        typerUtilisateur == 1 &&
        <div className="Admin" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
          <List>
            <ListItem>
              <h2 style={{color : purple[500]}}>Login Admin</h2>
            </ListItem>

            <ListItem>
              <label>Nom utilisateur : </label>
              <form onChange={submitHandlerNom}>
                <input ref={inputRefNom} />
              </form>
            </ListItem>

            <ListItem>
              <label>Mot de passe : </label>
              <form onChange={submitHandlerMotDePas}>
                <input ref={inputRefMotDePas} />
              </form>
            </ListItem>
                    
            <ListItem>
            <form onSubmit={handleSubmit}>
              <Button 
                  variant="contained"
                  style={{
                    color : purple[500],
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  type="submit"
              >
                Log in
              </Button>
              </form>
            </ListItem>

            <ListItem>
              <Button 
                  variant="contained"
                  style={{
                    color : purple[500],
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onClick={handleClickType}
              >
                Revenir au choix
              </Button>
            </ListItem>

          </List>
        </div>
      }

      { 
        typerUtilisateur == 2 &&
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}> 
        <List>
          <ListItem>
            <h1>WORK IN PROGRESS</h1>
          </ListItem>
          <ListItem>
            <Button 
                variant="contained"
                style={{
                  color : purple[500],
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onClick={handleClickType}
            >
              Revenir au choix
            </Button>
          </ListItem>
        </List>
        </div>
      }
    </div>
  );
}