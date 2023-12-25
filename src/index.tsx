import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// A exclamação no final do parâmetro indica que confiamos o suficiente nesse código e temos certeza de que ele nunca vai ser nulo 
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
