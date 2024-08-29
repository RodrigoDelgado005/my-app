import './App.css' // importamos los estilos

// retornaremos por pantalla los valores de las propiedades nombre, apellido y profesion
function Tarjeta(props) {
    return (
        <>
            <h1>{props.nombre}</h1>
            <h1>{props.apellido}</h1>
            <h1>{props.profesion}</h1>
        </>
    );
}

export default Tarjeta // exportamos el componente
