import SelectionLevantamientoMaterias from "../components/levantamiento/SelectionLevantamientoMaterias";
import ResultadoLevantamiento from "../components/levantamiento/ResultadoLevantamiento";
import { SelectionLevantamientoProvider } from "../context/SelectionLevantamiento";

const Llifting = () => {
    return ( 
        <SelectionLevantamientoProvider>
            {/* <h4>Levantamiento de Materias</h4> */}
            <SelectionLevantamientoMaterias />
            <ResultadoLevantamiento />
            {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
        </SelectionLevantamientoProvider>
    );
}
 
export default Llifting;