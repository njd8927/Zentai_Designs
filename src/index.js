import React from 'react';  // import react
import ReactDOM from 'react-dom/client';    // import react-dom
import './index.css';  // import index.css
import App from './App';  // import App component

const root = ReactDOM.createRoot(document.getElementById('root')); // create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

