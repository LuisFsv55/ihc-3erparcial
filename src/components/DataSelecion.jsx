import { useState } from 'react';
import '../styles/SelectionInscription.css';
import { DATASELECTION } from "../utils/DATASELECTION";

const DataSelecion = () => {
    const [check, setCheck] = useState( false );
    return ( 
        DATASELECTION.map( ( data, index ) => (
            <input 
                key={ index }
                type="checkbox" 
                className="materias-selection-input-check" 
                value={ check }
                onChange={ e => setCheck( !check ) }
            />
        ))
    );
}
 
export default DataSelecion;