import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  //Obtener el state del proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  //Obtener la función del context de tarea
  const tareasContext = useContext(tareaContext);
  const {obtenerTareas} = tareasContext;

  //Función para agregar el pryecto actual
  const seleccionarProyecto = id => {
    proyectoActual(id); //fijar un proyecto actual
    obtenerTareas(id); //filtrar las tares con se da click
  }

  return (
    <li>
      <button 
        type="button" 
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id) }
        >{proyecto.nombre}</button>
    </li>
  );
};

export default Proyecto;
