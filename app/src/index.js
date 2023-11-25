import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./App";
import "./index.css";
import {createTheme, ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));

let theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#9ec80d',
        },
    },
});

theme = createTheme(theme, {
    palette: {
        info: {
            main: theme.palette.secondary.main,
        },
    },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
  </React.StrictMode>
);
