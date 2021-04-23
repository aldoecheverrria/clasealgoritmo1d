
import './App.css';
import { useState } from 'react';


function App() {

 
 

const conjuntopacientes = [
  {
    id: 0,
    nombre: 'Aldo Echeverría',
    edad: 42,
    sexo: 'M',
    historial: 'El paciente es alérgico al polvo y polen; cita del 040421: El paciente vino con ...',
    receta: [
      {
        id: 0,
        fecha: '30/12/21',
        nombre: 'Paracetamol',
        cantidad: '500mg',
        tiempo: 'Cada 12hrs por 2 días.',
      },
      {
        id: 1,
        fecha: '30/12/21',
        nombre: 'Aspirina',
        cantidad: '500mg',
        tiempo: 'Cada 12hrs por 2 días.',
      }
    ]
  },
  {
    id: 1,
    nombre: 'Kevin Echeverría',
    edad: 43,
    sexo: 'M',
    historial: 'El paciente es alérgico a el polvo y polen; cita del 030420: llegó con una severa gripa...',
    receta: [
      {
        id: 0,
        fecha: '31/12/21',
        nombre: 'Tilenol',
        cantidad: '500 mg',
        tiempo: 'Cada 24hrs por 3 días.',
      },
      {
        id: 1,
        fecha: '31/12/21',
        nombre: 'Loratadina',
        cantidad: '200 mg',
        tiempo: 'Cada 12hrs por 5 días.',
      }
    ]
  }
];

const [arreglo, setArreglo] = useState(conjuntopacientes);

  return (
    <div className="app__body">JSX
      <div className="nav">
        <div className="container2">
        {
          arreglo.map((item, id) => (
            <p className="cadaitem">El nombre es {item.nombre}</p>
          
          ))
        }
        </div>

      </div>
      <div className="content">
        
          <div className="child header-child1">Read Carefully</div>
          <div className="child header-child2">past 30min? come back later!</div>
          <div className="child header-child3">A day and nothing...? check answer!</div>
         
    
      </div>
    </div>
  );
}

export default App;
