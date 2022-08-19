import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';
import { HashRouter } from 'react-router-dom';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	}
});

ReactDOM.render(
  <React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<HashRouter>
				<App></App>
			</HashRouter>
		</ThemeProvider>
	</React.StrictMode>,
  document.getElementById('root')
);
