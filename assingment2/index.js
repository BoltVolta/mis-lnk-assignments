import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Click() {
  const msg = () => {
    alert("Clicked!");
  }

  return (
    <div class="container">
      <div class="vertical-center">
        <button onClick={msg}>Click Me!</button>
      </div>
    </div>
  );
}

const app = (
  <Click />
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app, root)
