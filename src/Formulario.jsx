import './App.css'
import { useState } from 'react';

function Formulario() {
    
  const [nombre, setNombre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`¡Hola, ${nombre}!`);
    // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='formulario'>
      <label>
        <hr></hr>
        <br></br>
        <b>Nombre:</b>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br></br>
      <button type="submit">Enviar</button>
      </div>
    </form>
    
  );
}

export default Formulario;