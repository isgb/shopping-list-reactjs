import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataItemsProvider } from './context/DataItemsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataItemsProvider>
      <App />
    </DataItemsProvider>
  </React.StrictMode>
);
