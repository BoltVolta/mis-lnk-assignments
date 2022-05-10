import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function AnimalList(props) {
  const animals = props.animals;
  const listItems = animals.map((animals) =>
    <li>{animals}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AnimalList animals={animals}/>)

