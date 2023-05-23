import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material';

import { GlobalContextProvider } from './contexts/Global.context.jsx';

import Home from './pages/Home.jsx';
import theme from './main.theme.js';

import 'react-toastify/dist/ReactToastify.css';
import './main.style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalContextProvider>
        <Home />
      </GlobalContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
