import { createContext, useState } from "react";
import { inscribirMaterias } from "../service/requestJSON";
import { DATASELECTIONGRUPOS, DATASELECTIONMaterias } from "../utils/DATASELECTION";
const SelectionMateriasContext = createContext();

let detectarMateria = [];
const SelectionMateriasProvider = ({ children }) => {

    const [checkSelectionMaterias, setCheckSelectionMaterias] = useState( false );
    const [checkSelection, setCheckSelection] = useState( [] );

    const [checkGroupSelection, setCheckGroupSelection] = useState( false );
    const [checkGroupSelectionArray, setCheckGroupSelectionArray] = useState( [] );

    const [materiasInscritasReg, setMateriasInscritasReg] = useState( [] );
    const [conflictoCruceMaterias, setConflictoCruceMaterias] = useState(false);
    const [conflictoDataCruce, setConflictoDataCruce] = useState({});

    // Seleccionar Materias
    const handleChangeSelection = e => {
        const objSelect = {
            id: e.target.parentElement.parentElement.querySelector('.data-id').textContent
        };
        let selectFindMaterias = DATASELECTIONMaterias.find( mat => mat.id === parseInt( objSelect.id ) );
        const existeMaterias = checkSelection.some( mat => mat.id === selectFindMaterias.id );
        if ( !existeMaterias ) {
            setCheckSelection( [...checkSelection, selectFindMaterias] );
        } else {
            // Eliminar los duplicados
            const eliminadoCheck = checkSelection.filter( mat => mat.id !== selectFindMaterias.id );
            setCheckSelection( eliminadoCheck );
        }
        setCheckSelectionMaterias( !checkSelectionMaterias );
    }
    const evaluar = materia => {
        // console.log(materia);
        // console.log( checkGroupSelectionArray.length );
        for (let i = 0; i < checkGroupSelectionArray.length; i++) {
            console.log(materia.horas.inicio);
            console.log(checkGroupSelectionArray[i].horas.inicio);
            if ( materia.horas.inicio <= checkGroupSelectionArray[i].horas.inicio ) { // 10:00 <= 10:00
                if ( materia.horas.fin <= checkGroupSelectionArray[i].horas.inicio ) {// 12:00 < 10:00
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        }
        return false;// Está correcto
        
    }
    
    // Seleccionar Grupos parte II
    const handleChangeGroup = e => {
        const objSelect = {
            id: e.target.parentElement.parentElement.querySelector('.data-id-materias').textContent
        };
        
        let selectFindMaterias = DATASELECTIONGRUPOS.find( mat => parseInt( mat.id ) === parseInt( objSelect.id ) );
        const existeMaterias = checkGroupSelectionArray.some( mat => mat.id === selectFindMaterias.id );
        if ( !existeMaterias ) {
            if ( evaluar( selectFindMaterias ) ) {
                // console.log('Si hay conflicto');
                setConflictoDataCruce( selectFindMaterias );
                setConflictoCruceMaterias( true )
            } else {
                // console.log('No hay conflicto');
                setConflictoCruceMaterias( false )
                setCheckGroupSelectionArray( [...checkGroupSelectionArray, selectFindMaterias] );
            }
        } else {
            // Eliminar los duplicados
            const eliminadoCheck = checkGroupSelectionArray.filter( mat => parseInt( mat.id ) !== parseInt( selectFindMaterias.id ) );
            setCheckGroupSelectionArray( eliminadoCheck );
        }
        setCheckGroupSelection( !checkGroupSelection );
        const data = e.target.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.data-id-materias');
        data.forEach(element => {
            const padre = element.parentElement.querySelector('.materias-selection-input-check');
            if ( objSelect.id !== element.textContent ) {
                padre.disabled = true;
                element.parentElement.parentElement.parentElement.style.backgroundColor = '#FCFFE7'
            } else {
                padre.disabled = false;
            }
        });
    }
    // Materias Inscritas
    const handleSubmitInscricion = () => {
        checkGroupSelectionArray.forEach(materia => {
            inscribirMaterias( materia );
        });
        // setMateriasInscritasReg( checkGroupSelectionArray );
    }
    const handleClickQuitarMateria = id => {
        const checkGroupSelectionArrayNuevo = checkGroupSelectionArray.filter( che => che.id !== id  );
        setCheckGroupSelectionArray( checkGroupSelectionArrayNuevo );
        setCheckSelection( [] );
        setConflictoCruceMaterias( false )
        // console.log(document.querySelector('checked-js-materias'));
    }
    return (
        <SelectionMateriasContext.Provider value={{ 
            checkSelectionMaterias,
            handleChangeSelection,
            checkSelection,
            handleChangeGroup,
            checkGroupSelection,
            checkGroupSelectionArray,
            handleSubmitInscricion,
            materiasInscritasReg,
            conflictoCruceMaterias,
            conflictoDataCruce,
            handleClickQuitarMateria,
            setCheckSelectionMaterias
        }}>
            { children }
        </SelectionMateriasContext.Provider>
    );
};

export { SelectionMateriasProvider };
export default SelectionMateriasContext;