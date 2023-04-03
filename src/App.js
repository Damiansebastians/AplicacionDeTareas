import './App.css';
import logoTarea from './img/logo-tarea.png'
import ListaDeTareas from './components/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
    <div className="logo-contenedor">
      <h1>APLICACION DE TAREAS</h1>
      <img
        src={logoTarea} 
        className='logo-imagen'
        alt='Logo de tareas'
        />
    </div>
        <div className='tareas-lista-principal'>
          <h2>MIS TAREAS</h2>
          <ListaDeTareas />
        </div>
    </div>
  );
};

export default App;
