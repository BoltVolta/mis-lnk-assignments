import React from 'react'
import './AnimalList.css'

function AnimalList(props) {
  const animals = props.animals;
  const listItems = animals.map((animals) =>
    <li className='list-item'>{animals}</li>
  );
  return (
    
    <ul className='unordered-list'>{listItems}</ul>
  );
}

export default AnimalList
