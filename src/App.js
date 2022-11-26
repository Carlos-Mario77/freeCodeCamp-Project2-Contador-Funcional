import freeCodeCampLogo from '../src/imagenes/FreeCodeCamp_logo2.png'
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';
import './App.css';

function App() {

  const [numClics, setNumClics] = useState(0);//Si dejo el valor inicial del estado en '' o [], no aumenta el valor del contador sino que concatena los números, 1, 11, 111, 1111, 11111, por eso debo setearlo en 0 (cero).

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);//Para reiniciar el contador, lo seteo en 0 de esta manera, solo así muestra el 0 en pantalla, de otras formas que probé, reiniciaba pero no se mostraba el 0 en pantalla, quedaba en blanco
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton 
          texto='Clic' 
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
};

export default App;
