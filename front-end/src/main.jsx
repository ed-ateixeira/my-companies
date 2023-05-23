import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.jsx';
import './main.style.css';
import { GlobalContextProvider } from './contexts/Global.context.jsx';
import theme from './main.theme.js';
import { ThemeProvider } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalContextProvider>
          <Home />
        </GlobalContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
