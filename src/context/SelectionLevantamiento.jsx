import { createContext, useState, useEffect } from "react";
import { inscribirMaterias } from "../service/requestJSON";
import { DATASELECTIONGRUPOS, DATASELECTIONMaterias } from "../utils/DATASELECTION";
const SelectionLevantamientContext = createContext();

const SelectionLevantamientoProvider = ({ children }) => {

    const [checkSelectionMaterias, setCheckSelectionMaterias] = useState( false );
    const [checkSelection, setCheckSelection] = useState( [] );

    const [checkGroupSelection, setCheckGroupSelection] = useState( false );
    const [checkGroupSelectionArray, setCheckGroupSelectionArray] = useState( [] );

    // API
    const [materiasJSONinscritas, setMateriasJSONinscritas] = useState( [] );


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
    // Seleccionar Grupos
    const handleChangeGroup = e => {
        const objSelect = {
            id: e.target.parentElement.parentElement.querySelector('.data-id-materias').textContent
        };
        let selectFindMaterias = DATASELECTIONGRUPOS.find( mat => parseInt( mat.id ) === parseInt( objSelect.id ) );
        const existeMaterias = checkGroupSelectionArray.some( mat => mat.id === selectFindMaterias.id );
        if ( !existeMaterias ) {
            setCheckGroupSelectionArray( [...checkGroupSelectionArray, selectFindMaterias] );
            setMateriasJSONinscritas([ ...materiasJSONinscritas, selectFindMaterias  ]);
        } else {
            // Eliminar los duplicados
            const eliminadoCheck = checkGroupSelectionArray.filter( mat => mat.id !== selectFindMaterias.id );
            setCheckGroupSelectionArray( eliminadoCheck );
            const eliminado = materiasJSONinscritas.filter( mat => mat.id !== selectFindMaterias.union.id );
            setMateriasJSONinscritas( eliminado );
        }
        setCheckGroupSelection( !checkGroupSelection );
    }
    useEffect(() => {
        const peticion = async() => {
            const resultado = await fetch( 'http://localhost:4000/inscritas' );
            const materias = await resultado.json();
            setMateriasJSONinscritas( materias );
        }
        peticion();
    }, []);
    return (
        <SelectionLevantamientContext.Provider value={{ 
            checkSelectionMaterias,
            handleChangeSelection,
            checkSelection,
            handleChangeGroup,
            checkGroupSelection,
            checkGroupSelectionArray,
            materiasJSONinscritas,
            setMateriasJSONinscritas
        }}>
            { children }
        </SelectionLevantamientContext.Provider>
    );
};


export { SelectionLevantamientoProvider };
export default SelectionLevantamientContext;