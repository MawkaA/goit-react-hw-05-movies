import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter basename="/goit-react-hw-05-movies/">
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
