import React from "react";

function Imagenes(props) { //Added a default value to size in case no value is added when calling the component
// Pasando una imagen como prop
    return (
        <div className="d-flex justify-content-center">
            <img 
                className='imagen-prop'
                src={props.imagen}
                width={props.width}
                height={props.height}
                alt={props.alt}
            />
        </div>
    )
}

export default Imagenes