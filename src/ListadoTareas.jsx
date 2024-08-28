import "./App.css";
import { useState } from "react";

const Tareas = ({ nombre, completada, onCompletar }) => {
  return (
    <li>
      {nombre}
      <input type="checkbox" checked={completada} onChange={onCompletar} />
    </li>
  );
};

const AgregarTarea = ({ agregarTarea }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

const onSubmit = (event) => {
  const enviar = {
    nombre: inputValue,
    completada: false,
  };
    event.preventDefault();
    agregarTarea((tareas) => [...tareas, enviar]);
  };

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

  const handleCompletarTarea = (index) => {
    const nuevasTareas = [...arreglo];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setArreglo(nuevasTareas);
  };

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

export default Listado;
