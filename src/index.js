import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import App from './components/App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
