// importaremos el estilo y el useState para gestionar el estado
import "./App.css";
import { useState } from "react";

// Muestra las tareas en la lista
const Tareas = ({ nombre, completada, onCompletar }) => {
  return (
    // Recibe el nombre de la tarea, si está completada y una función para marcarla como completada
    <li>
      {nombre}
      <input type="checkbox" checked={completada} onChange={onCompletar} />
    </li>
  );
};

// Funcion que le permite al usuario agregar nuevas tareas
const AgregarTarea = ({ agregarTarea }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

// Función para el envío del formulario
const onSubmit = (event) => {
  const enviar = {
    nombre: inputValue, //Obtiene el valor ingresado
    completada: false, // Inicia como no completada
  };
    event.preventDefault();
    agregarTarea((tareas) => [...tareas, enviar]); // agrega la tarea en el arreglo
  };

  // muestra el formulario para agregar tareas
  return (
    <form onSubmit={onSubmit}>
      <input
        required={true}
        minLength={2}
        type="text"
        placeholder="Agregar Tarea"
        onChange={onInputChange}
      ></input>
    </form>
  );
};

// Muestra la lista de tareas, permite agregar nuevas y marcarlas como completadas
function Listado() {
  let listadoTareas = [
    { nombre: "Instalaciones necesarias", completada: true },
    { nombre: "Descargas", completada: true },
    { nombre: "Limpiar", completada: true },
    { nombre: "Analizar", completada: false },
    { nombre: "Recuperar", completada: true },
    { nombre: "Informar", completada: false },
  ];
  const [arreglo, setArreglo] = useState(listadoTareas);

  // Función para marcar una tarea como completada
  const handleCompletarTarea = (index) => {
    const nuevasTareas = [...arreglo];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setArreglo(nuevasTareas);
  };

  // Muestra la lista de tareas
  return (
    <div className="lista">
      <h1>Listado de Tareas</h1>
      <AgregarTarea agregarTarea={setArreglo}></AgregarTarea>
      <ol>
        {arreglo.map((tarea, index) => (
          <Tareas
            key={tarea.nombre}
            nombre={tarea.nombre}
            completada={tarea.completada}
            onCompletar={() => handleCompletarTarea(index)}
          />
        ))}
      </ol>
    </div>
  );
}

export default Listado; // exportamos el componente
