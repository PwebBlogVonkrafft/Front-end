import { Box, Button, Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { StyledCard, StyledButton } from "../styles/styles.js";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FacebookIcon from '@mui/icons-material/Facebook';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function EventCardEditable({ element, onClickEdit, onClickDelete }) {
  return (
    <StyledCard sx={{ p: 2 }}>
      <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item xs={6} sm={2}>
          <Box sx={{ p: 1, backgroundColor: "#009688", borderRadius: "4px" }}>
            <Typography variant="h6" sx={{ lineHeight: "24px" }} color="white">
              <Box sx={{ fontWeight: 'bold' }}>{element.name}</Box>
            </Typography>
          </Box>
        </Grid>
        <Grid ite xs={6} sm={2}>
          <Typography variant="h6" color="text.secondary">
            {element.date_concert}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6">
            {element.lieu}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Button
            startIcon={<NewspaperIcon />}
            variant="outlined"
            disabled={element.article === ""}
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.open(element.article, '_blank');
            }}>
            Article
          </Button>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Button
            startIcon={<FacebookIcon />}
            variant="outlined"
            disabled={element.liens_facebook === ""}
            fullWidth
            onClick={(e) => {
              e.preventDefault();
              window.open(element.liens_facebook, '_blank');
            }}>
            Facebook
          </Button>
        </Grid>
        <Grid item xs={12} sm={2} container direction="column" spacing={1} alignItems="center">
          <Grid item>
            <StyledButton
              startIcon={<EditIcon />}
              onClick={() => onClickEdit(element.id)}
              sx={{
                background: "green",
                maxWidth: "130px",
                minWidth: "130px"
              }}>
              Modifier
            </StyledButton>
          </Grid>
          <Grid item>
            <StyledButton
              startIcon={<DeleteIcon />}
              onClick={() => onClickDelete(element)}
              sx={{
                background: "red",
                maxWidth: "130px",
                minWidth: "130px"
              }}>
              Supprimer
            </StyledButton>
          </Grid>
        </Grid>
      </Grid>
    </StyledCard >
  );
}

export default EventCardEditable;