import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import theme from './constants/theme.ts';
import './output.css';
import { AuthProvider } from './providers/AuthProvider.tsx';
import { store } from './redux/store.ts';
import routes from './routes/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <AuthProvider> */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={routes} />
        </ThemeProvider>
      {/* </AuthProvider> */}
    </Provider>
  </React.StrictMode>
);
