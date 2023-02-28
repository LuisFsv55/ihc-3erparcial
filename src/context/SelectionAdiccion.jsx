import { createContext, useEffect, useState } from "react";
import { DATASELECTIONGRUPOS, DATASELECTIONMaterias } from "../utils/DATASELECTION";

const SelectionAdiccionContext = createContext();

const SelectionAdicionProvider = ({ children }) => {

    const [checkSelectionMaterias, setCheckSelectionMaterias] = useState( false );
    const [checkSelection, setCheckSelection] = useState( [] );

    const [checkGroupSelection, setCheckGroupSelection] = useState( false );
    const [checkGroupSelectionArray, setCheckGroupSelectionArray] = useState( [] );

    const [materiasInscritasReg, setMateriasInscritasReg] = useState( [] );
    // API
    const [materiasJSONinscritas, setMateriasJSONinscritas] = useState( [] );
    const [materiasAdicionarIncritas, setMateriasAdicionarIncritas] = useState([]);

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
    // Seleccionar Grupos
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
                setConflictoCruceMaterias( false );
                // if ( !existeAlgun ) {
                    setCheckGroupSelectionArray( [...checkGroupSelectionArray, selectFindMaterias] );
                    setMateriasJSONinscritas([ ...materiasJSONinscritas, selectFindMaterias  ]);
                // }
            }

            // setCheckGroupSelectionArray( [...checkGroupSelectionArray, selectFindMaterias] );
        } else {
            // Eliminar los duplicados
            const eliminadoCheck = checkGroupSelectionArray.filter( mat => mat.id !== selectFindMaterias.id );
            setCheckGroupSelectionArray( eliminadoCheck );
            const eliminado = materiasJSONinscritas.filter( mat => mat.id !== selectFindMaterias.union.id );
            setMateriasJSONinscritas( eliminado );
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
    const handleClickQuitarMateria = id => {
        const checkGroupSelectionArrayNuevo = checkGroupSelectionArray.filter( che => che.id !== id  );
        setCheckGroupSelectionArray( checkGroupSelectionArrayNuevo );
        setCheckSelection( [] );
        setConflictoCruceMaterias( false )
        // console.log(document.querySelector('checked-js-materias'));
    }
    useEffect(() => {
        const peticion = async() => {
            const resultado = await fetch( 'http://localhost:4000/inscritas' );
            const materias = await resultado.json();
            setMateriasJSONinscritas( materias );

            for (let i = 0; i < materias.length; i++) {
                const existeMaterias = DATASELECTIONMaterias.filter( mat => mat.id !== materias[i].id );
                setMateriasAdicionarIncritas( existeMaterias );
            }
        }
        peticion();
    }, []);
    return (
        <SelectionAdiccionContext.Provider value={{ 
            checkSelectionMaterias,
            handleChangeSelection,
            checkSelection,
            handleChangeGroup,
            checkGroupSelection,
            checkGroupSelectionArray,
            handleClickQuitarMateria,
            // handleSubmitInscricion,
            materiasJSONinscritas,
            materiasInscritasReg,
            conflictoCruceMaterias,
            conflictoDataCruce,
            handleClickQuitarMateria,
            setCheckSelectionMaterias,
            materiasAdicionarIncritas
        }}>
            { children }
        </SelectionAdiccionContext.Provider>
    );
};

export { SelectionAdicionProvider };
export default SelectionAdiccionContext;