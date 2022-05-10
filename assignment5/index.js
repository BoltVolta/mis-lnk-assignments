import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const Animals = () => {
  const data = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
  return (
    <div>
      {data.map((animals) => (
        <li>{animals}</li>))}
    </div>
    )
}

const app = (
  <Animals />
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app, root)
