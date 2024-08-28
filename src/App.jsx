import logo from "./logo.svg";
import "./App.css";
import Tarjeta from "./Tarjeta.jsx";
import image from "./tarjeta.png";
import ContadorResultados from "./Contador.jsx";

function App() {
  const nombre = "Julian";
  const apellido = "Jerez";
  const profesion = "Docente";
  return (
    <div className="App">
      <header className="App-header">
        <div className="saludO">
          <h1>hola mundo</h1>
        </div>
        <div>
          <div className="tarjeta-presentacion">
            <img src={require("../src/tarjeta.png")} />
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
