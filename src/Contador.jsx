// importaremos el estilo y el useState para gestionar el estado
import React, { useState } from 'react';
import './App.css';

function ContadorResultados() {
  // el contador comenzara en 0
  const [valor, setValor] = useState(0);

  // le restara dos al contador
  const suma = () => {
    setValor(valor + 1);
  };
  
  // le restara uno al contador
  const resta = () => {
    setValor(valor - 1);
  };

  
  // retornaremos por pantalla dos botones y un contador
  return (
    <div className="contador">
      <h1>Contador: {valor}</h1>
      <button onClick={suma}> + </button>
      <button onClick={resta}> - </button>
    </div>
  );
}

export default ContadorResultados; // exportamos el componente