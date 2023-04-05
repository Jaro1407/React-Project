import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./Components/App"
// Importing Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App/>
  </div>
);

