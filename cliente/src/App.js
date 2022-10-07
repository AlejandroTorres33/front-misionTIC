import './App.css';
import ListaEquipos from './Componentes/Equipos/ListaEquipos';
import CrearEquipo from './Componentes/Equipos/CrearEquipo';
import EditarEquipo from './Componentes/Equipos/EditarEquipo';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>Navbar</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><b>Home</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/api/equipo"><b>Equipos</b></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/api/equipo' element={<ListaEquipos />} exact></Route>
          <Route path='/api/equipo/crear' element={<CrearEquipo />} exact></Route>
          <Route path='/api/equipo/editar' element={<EditarEquipo />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
