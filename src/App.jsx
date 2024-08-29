import logo from "./logo.svg";
import "./App.css";
import Tarjeta from "./Tarjeta.jsx";
import image from "./tarjeta.png";
import ContadorResultados from "./Contador.jsx";
// Importamos los componentes y las imagenes que usaremos

function App() {
  // Definimos las constantes que utilizaremos para el Elemento Tarjeta
  const nombre = "Julian";
  const apellido = "Jerez";
  const profesion = "Docente";
  return (
    <div className="App">
      <header className="App-header">
        <div className="saludO">
          <h1>hola mundo</h1> {/*Saludo*/}
        </div>
        <div>
          <div className="tarjeta-presentacion">
            <img src={require("../src/tarjeta.png")} />
            {/*Contenido del Componente Tarjeta*/}
            <b>
              {nombre} {apellido}
            </b>
            <br></br> {profesion}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
