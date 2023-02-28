import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Inscription from "./pages/Inscription";
import Addiction from "./pages/Addiction";
import Llifting from "./pages/Llifting";
import logo from './img/registro.png';

const RouterApp = () => {
    return ( 
        <Router>
            <nav className="nav-materias">
                <div className="nav-imagen">
                    <img src={ logo } alt="Logo" width={ 70 } />
                </div>
                <p>Bienvenido: Luis Fernando Santos Vargas - 217047671</p>
                <div className="nav-enlaces">
                    <a className="nav-enlace" href="/inscription">Inscripcion</a>
                    <a className="nav-enlace" href="/addiction">Adicción</a>
                    <a className="nav-enlace" href="/levantamiento">Levantamiento</a>
                </div>

            </nav>
            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="/inscription" element={ <Inscription /> } />
                <Route path="/addiction" element={ <Addiction /> } />
                <Route path="/levantamiento" element={ <Llifting /> } />
            </Routes>
        </Router>
    );
}
 
export default RouterApp;