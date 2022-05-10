import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './Button'
import './index.css';

const app = (
    <div>
    <Button onClick={() => {alert(`You clicked on Button 1`)}} type="button" > Button 1 </Button>
    <Button onClick={() => {alert(`You clicked on Button 2`)}} type="button" > Button 2 </Button>
    <Button onClick={() => {alert(`You clicked on Button 3`)}} type="button" > Button 3 </Button>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app, root)
