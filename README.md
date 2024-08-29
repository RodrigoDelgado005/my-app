# Inicio---R1

Para realizar los puntos debemos tener instalado node, npm y react. Para instalarlo podemos seguir lo siguiente:

Paso 1: Instala Node.js y npm
Antes de instalar React, necesitas tener Node.js y npm (Node Package Manager) instalados en tu sistema. Si aún no los has instalado, sigue estos pasos:

Visita la página de descargas de Node.js en: https://nodejs.org/en/download/
Descarga el instalador para tu sistema Windows

Una vez completada la instalación, puedes comprobar que Node.js y npm están instalados abriendo un símbolo del sistema y ejecutando los siguientes comandos:
node -v npm -v

Paso 2: Instala Create React App
Create React App es una herramienta de línea de comandos que simplifica el proceso de configuración de un nuevo proyecto React con una estructura y configuración de proyecto recomendadas. Para instalar Create React App de forma global, abre un símbolo del sistema y ejecuta el siguiente comando:

npm install -g create-react-app

Este comando instala Create React App en tu sistema, haciendo que esté disponible para su uso en cualquier directorio.

Paso 3: Crea un nuevo proyecto React
Ahora que tienes Create React App instalado, puedes utilizarlo para crear un nuevo proyecto React. Para ello, abre un símbolo del sistema, dirígete al directorio en el que quieres que se aloje el proyecto y ejecuta el siguiente comando:

create-react-app my-app
Sustituye «my-app» por el nombre que desees para tu proyecto. Create React App creará un nuevo directorio con el nombre especificado y generará un nuevo proyecto React con una estructura y configuración de proyecto recomendadas.

Paso 4: Ve al directorio del proyecto e inicia el servidor de desarrollo
Una vez creado el proyecto, dirígete al directorio del proyecto ejecutando el siguiente comando en el símbolo del sistema:
cd my-app

Sustituye «my-app» por el nombre del directorio de tu proyecto. Ahora, inicia el servidor de desarrollo ejecutando el siguiente comando:
npm start

Este comando inicia el servidor de desarrollo, que vigila los cambios en los archivos de tu proyecto y recarga automáticamente el navegador cuando detecta cambios.


1- Hola mundo
Problema: Crear un componente que muestre un simple "Hola, mundo!".
Experimentar con diferentes estilos utilizando CSS.

Con poner un 'h1' que diga Hola Mundo ya crearemos un componente que muestre ese mensaje


2- Tarjeta de presentación
Problema: Crear un componente que represente una tarjeta de presentación con nombre, apellido, profesión y una imagen.
Utilizar props para pasar los datos de la tarjeta.

Para esto debemos crear un archivo que se llame Tarjeta.jsx, debemos renderizarlo en el archivo Index.jsx, y realizar la solucion con props en el archivo, donde luego en app.jsx le daremos un valor a estas propiedades y lo mostraremos por pantalla

3- Contador
Problema:Crear un componente que muestre un contador con botones para incrementar y decrementar el valor.
Utilizar el estado para mantener el valor del contador.

Para esto debemos crear un archivo que se llame Contador.jsx, debemos renderizarlo en el archivo Index.jsx, y realizar la solucion en el archivo que creamos.

4- Lista de tareas
Problema:Crear un componente que muestre una lista de tareas.
Agregar tareas a la lista y marcarlas como completadas.
Utilizar un arreglo en el estado para almacenar las tareas.

Para esto debemos crear un archivo que se llame ListadoTareas.jsx, debemos renderizarlo en el archivo Index.jsx, y realizar la solucion en el archivo que creamos.

5- Formulario simple
Crear un formulario para capturar el nombre de un usuario.
Mostrar un mensaje de bienvenida cuando se envíe el formulario.
Utilizar el estado para almacenar el valor del input.

Para esto debemos crear un archivo que se llame Formulario.jsx, debemos renderizarlo en el archivo Index.jsx, y realizar la solucion en el archivo que creamos.
# R1
