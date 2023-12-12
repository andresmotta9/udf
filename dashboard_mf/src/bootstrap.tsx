import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import DashboardApp from './dashboard/DashboardApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DashboardApp name='Andres'/>
  </React.StrictMode>
);
