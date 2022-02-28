import React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import HomePage from './Views/home_page';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <HomePage />
  </StyledEngineProvider>,
  document.getElementById('root')
);



/*
ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById("#root")
);*/