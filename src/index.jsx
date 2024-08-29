import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Tarjeta from './Tarjeta.jsx';
import reportWebVitals from './reportWebVitals.js';
import ContadorResultados from './Contador.jsx';
import ListadoTareas from './ListadoTareas.jsx';
import Formulario from './Formulario.jsx';
// Importamos componentes, metodos, estilos, etc

const root = ReactDOM.createRoot(document.getElementById('root'));
// Renderiza los componentes
root.render(
  <React.StrictMode>
    <App />
    <ContadorResultados />
    <ListadoTareas />
    <Formulario />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
