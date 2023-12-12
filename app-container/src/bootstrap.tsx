import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { UidfApp } from './UidfApp';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UidfApp />
    </BrowserRouter>
  </React.StrictMode>
);
