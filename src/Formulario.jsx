// importaremos el estilo y el useState para gestionar el estado
import './App.css'
import { useState } from 'react';

// Esta funcion almacena el valor del nombre introducido por el usuario
function Formulario() {   
  const [nombre, setNombre] = useState('');

  // Función para cuando se envie el formulario, se muestre una alerta con un saludo y el nombre introducido
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`¡Hola, ${nombre}!`);
  };

  // Muestra el formulario
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

export default Formulario; // exportamos el componente