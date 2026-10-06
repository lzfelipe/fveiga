import React from 'react';
import { createRoot } from 'react-dom/client';
import Routes from './Routes';
import './styles/css/global.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
