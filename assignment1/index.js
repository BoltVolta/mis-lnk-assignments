import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const app = (
  <div class="square">
    <h1>Hello World!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app, root);

