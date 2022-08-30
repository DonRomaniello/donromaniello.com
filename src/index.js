import { ColorModeScript } from '@chakra-ui/react';

import React, { StrictMode } from 'react';

import * as ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';

import { store } from './store/index.js';


import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

import theme from './styling/theme'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


root.render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>
);

serviceWorker.unregister();
reportWebVitals();
