import SelectionInscription from "../components/SelectionInscription";
import Resultado from "../components/Resultado";
import logo from '../img/registro.png';
import { Link } from "react-router-dom";

const Inscription = () => {
    return ( 
        <>
            {/* <h4 className="title">Registro de Materias</h4> */}
            <nav className="nav-materias">
                <div className="nav-imagen">
                    <img src={ logo } alt="Logo" width={ 70 } />
                </div>
                <p>Luis Fernando Santos Vargas - 217047671</p>
                <div className="nav-enlaces">
                    <Link className="nav-enlace" to="/inscription">Inscripcion</Link>
                    <Link className="nav-enlace" to="/addiction">Adicción</Link>
                    <Link className="nav-enlace" to="/levantamiento">Levantamiento</Link>
                </div>

            </nav>
            <SelectionInscription />
            <Resultado />
        </>
    );
}
 
export default Inscription;