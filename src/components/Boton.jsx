import React from 'react'
import '../estilos/Boton.css'

function Boton ({ texto, esBotonDeClic, manejarClic }) {//texto es el texto que se va a mostrar en el botón. Si el botón que se va a mostrar es un botón de click o no y la función que permite manejar lo que ocurrirá cuando se de click en el botón
 
  return (
    <button 
        className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }    //Así le asigno una clase u otra dependiente del valor de entrada 
        onClick={manejarClic}>
        {texto}
    </button>
  )
}

export default Boton 