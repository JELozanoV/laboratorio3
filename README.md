# laboratorio3
Gestor de tareas

La aplicación de gestión de tareas en React está diseñada con una estructura modular. El com- ponente principal, llamado App, se encarga de manejar el estado global de las tareas y la sin- cronización con el almacenamiento local. Utiliza los hooks useState para gestionar el estado de las tareas y useEffect para cargar las tareas desde el almacenamiento local al iniciar la aplica- ción.
Dentro de la aplicación, se han creado varios componentes secundarios. El componente Task- Form permite a los usuarios agregar nuevas tareas y utiliza useState para manejar el estado del formulario. El componente TaskList muestra la lista de tareas y se encarga de renderizar cada tarea mediante el componente TaskItem. Este último muestra detalles específicos de una tarea y maneja los eventos para marcarla como completada o eliminarla.
El enrutamiento de la aplicación se gestiona con react-router-dom, permitiendo la navegación entre diferentes vistas: la vista de todas las tareas en la ruta raíz (/), las tareas completadas en /completed, y las tareas pendientes en /pending.
En términos de diseño, se han implementado estilos básicos en el archivo styles.css para ga- rantizar una interfaz intuitiva y responsive. Se han utilizado media queries para adaptar el di- seño a diferentes tamaños de pantalla, asegurando una buena experiencia en dispositivos va- riados.
Entre las ventajas de la implementación se encuentran la modularidad y la reutilización de com- ponentes, facilitando el mantenimiento del código. Los hooks useState y useEffect proporcio- nan una manera efectiva de manejar el estado y sincronizar con el almacenamiento local. Ade- más, react-router-dom simplifica la navegación entre diferentes vistas. El diseño responsive mejora la experiencia del usuario en distintos dispositivos.
 
Sin embargo, existen algunas desventajas. La persistencia de datos mediante localStorage puede no ser ideal para aplicaciones que manejen grandes volúmenes de datos o que requie- ran mayores niveles de seguridad. Además, el uso extensivo de useState puede complicar la gestión del estado en aplicaciones más complejas. El renderizado de listas grandes también puede afectar el rendimiento de la aplicación.
Para mejorar el rendimiento, se pueden considerar varias estrategias. La virtualización de listas utilizando bibliotecas como react-window o react-virtualized puede mejorar la eficiencia al ren- derizar solo los elementos visibles. En lugar de useState, se podría usar useReducer para una gestión más robusta del estado. Para una persistencia de datos más avanzada, IndexedDB puede ser una mejor opción que localStorage. Además, la implementación de React.lazy y Sus- pense para la carga diferida de componentes puede reducir el tiempo de carga inicial de la apli- cación.
