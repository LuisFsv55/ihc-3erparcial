import SelectionAdiccionMaterias from "../components/SelectionAdiccionMaterias";
import ResultadoAdicion from "../components/ResultadoAdicion";
import logo from '../img/registro.png';
import { Link } from "react-router-dom";

const Addiction = () => {
    return ( 
        <>
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
            <SelectionAdiccionMaterias />
            <ResultadoAdicion />
        </>
    );
}
 
export default Addiction;