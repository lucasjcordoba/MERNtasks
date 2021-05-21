import React from 'react'

const FormTarea = () => {
    return ( 
        <div className="formulario">
            <form action="">
                <div className="contenedor-input">
                    <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre tarea..."
                    name="nombre"
                />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="subit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea;