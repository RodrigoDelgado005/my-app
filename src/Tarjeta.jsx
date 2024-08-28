import './App.css'

function Tarjeta(props) {
    return (
        <>
            <h1>{props.nombre}</h1>
            <h1>{props.apellido}</h1>
            <h1>{props.profesion}</h1>
        </>
    );
}

export default Tarjeta
