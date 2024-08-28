import React, { useState } from 'react';
import './App.css';

function ContadorResultados() {
  const [valor, setValor] = useState(0);

  const suma = () => {
    setValor(valor + 1);
  };

  const resta = () => {
    setValor(valor - 1);
  };

  

  return (
    <div className="contador">
      <h1>Contador: {valor}</h1>
      <button onClick={suma}> + </button>
      <button onClick={resta}> - </button>
    </div>
  );
}

export default ContadorResultados;