
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AnimalList from './AnimalList';

const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AnimalList animals={animals}/>)
