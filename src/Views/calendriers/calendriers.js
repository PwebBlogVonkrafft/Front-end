import { Grid } from '@material-ui/core';
import * as React from 'react';
import { useState } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import EventCard from "./EventCard";
import EventCardEditable from './EventCardEditable';
import EventEdit from './EventEdit';
import { StyledBox, StyledButton, StyledFormControlLabel, StyledSwitch } from "../styles/styles.js";

// Import const
import { dateList } from "../accueil/bdd/data.js";

function Calendriers() {
  // La construction de la page Calendriers est fortement basé sur la page Article

  const [editMode, setEditMode] = useState(false)
  const [edit, setEdit] = useState(-1);

  const [render, forceRender] = useState(false);

  // TODO These two handlers only change the dateList object.
  // Manipulation of database still needs to be implemented with axios
  const handleStoreEvent = (element) => {
    dateList[dateList.findIndex(article => article.id === element.id)] = element;
  };

  const handleDeleteEvent = (element) => {
    dateList.splice(dateList.findIndex(article => article.id === element.id), 1);
    forceRender(!render);
  };

  return (
    <StyledBox>
      <Grid container direction="column" spacing={1}>

        { edit === -1 &&
          <Grid item container justifyContent="flex-end">
          <StyledFormControlLabel
            control={
              <StyledSwitch
                color="secondary"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
              />}
            label="Modifier"
          />
        </Grid>
        }

        {
          // VUE D'ENSEMBLE
          editMode === false && edit === -1 &&
          <Grid item container spacing={2}>
            {dateList.map(event => (
              <Grid item xs={12}>
                <EventCard element={event} />
              </Grid>
            )).reverse()}
          </Grid>
        }

        {
          // EDIT MODE - VUE D'ENSEMBLE
          // TODO Afficher edit mode seulement pour Admin
          editMode === true && edit === -1 &&
          <Grid item container spacing={2}>
            <Grid item xs={12}>
              <StyledButton
                fullWidth
                startIcon={<AddBoxIcon />}
                sx={{ background: "grey" }}
                onClick={() => {
                  var newEvent = {
                    id: String(dateList.length),
                    date: "",
                    name: "",
                    date_concert: "",
                    lieu: "",
                    article: "",
                    liens_facebook: "",
                  }
                  dateList.push(newEvent)
                  setEdit(newEvent.id)
                }}>
                Ajouter event
              </StyledButton>
            </Grid>

            {dateList.map(event => (
              <Grid item xs={12}>
                <EventCardEditable element={event} onClickEdit={setEdit}
                  onClickDelete={handleDeleteEvent} />
              </Grid>
            )).reverse()}
          </Grid>
        }

        {
          // EDIT ARTICLE
          edit !== -1 &&
          <Grid item>
            <EventEdit element={dateList.find(event => event.id === edit)}
              onClickRetour={() => setEdit(-1)} storeEvent={handleStoreEvent} />
          </Grid>
        }

      </Grid>
    </StyledBox>
  );
}

export default Calendriers;

