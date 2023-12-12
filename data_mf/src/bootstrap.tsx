import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataApp } from './DataApp';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataApp />
  </React.StrictMode>
);
