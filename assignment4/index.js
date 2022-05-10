import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './counter';
import './index.css';

const app = (
    <Counter />
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app, root)
