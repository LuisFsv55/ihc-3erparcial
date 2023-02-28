import SelectionLevantamientoMaterias from "../components/levantamiento/SelectionLevantamientoMaterias";
import ResultadoLevantamiento from "../components/levantamiento/ResultadoLevantamiento";
import { SelectionLevantamientoProvider } from "../context/SelectionLevantamiento";
import logo from '../img/registro.png';
import { Link } from "react-router-dom";
const Llifting = () => {
    return ( 
        <SelectionLevantamientoProvider>
            <nav className="nav-materias">
                <div className="nav-imagen">
                    <img src={ logo } alt="Logo" width={ 70 } />
                </div>
                <p>Luis Fernando Santos Vargas - 217047671</p>
                <div className="nav-enlaces">
                    <Link className="nav-enlace" to="/addiction">Adicción</Link>
                    <Link className="nav-enlace" to="/levantamiento">Levantamiento</Link>
                </div>
            </nav>
            <SelectionLevantamientoMaterias />
            <ResultadoLevantamiento />
        </SelectionLevantamientoProvider>
    );
}
 
export default Llifting;