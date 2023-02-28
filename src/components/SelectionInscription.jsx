import { Fragment, useContext, useEffect } from 'react';
import '../styles/SelectionInscription.css';
import '../styles/SelectionInscription-2.css';
import { DATASELECTIONMaterias } from '../utils/DATASELECTION';
import SelectionMateriasContext from '../context/SelectionMateriasContext';
import SelectionGroups from './SelectionGroups';

const SelectionInscription = () => {
    const { handleChangeSelection, checkSelection, setCheckSelectionMaterias, checkSelectionMaterias } = useContext( SelectionMateriasContext );
    
    return (
        <div className="SelectionInscription">
            <div className="SelectionInscription-1">
                <h4 className='title-materias'>Seleccionar Materias:</h4>
                {
                    DATASELECTIONMaterias.map( (data, index) => (
                        <div key={ index } className='SelectionInscription-1-materias'>
                            <div className='materias-selection'>
                                <span className='data-id'>{ data.id }</span>
                                <p className='materia-subject'>Materia: <span>{ data.subject } - { data.sigla }</span></p>
                                <p className='materia-subject'>Nivel: <span>{ data.nivel }</span></p>
                            </div>
                            <div className='materias-selection-input'>
                                <input 
                                    type="checkbox" 
                                    className="materias-selection-input-check" 
                                    value={ checkSelectionMaterias }
                                    onChange={ e => {
                                        setCheckSelectionMaterias( !checkSelectionMaterias )
                                        handleChangeSelection( e )
                                    }}
                                />
                            </div>
                        </div>
                    ))
                }               
            </div>
            <div className="SelectionInscription-2">
                <h4 className='title-group'>Seleccionar Grupos de Materias:</h4>
                <div className='selection-group-materias'>
                    {
                        checkSelection.map( ( data, index ) => (
                            <div className='select-inscription-group' key={ index }>
                                <p className='parafo-grupo'>{ data.sigla } | { data.subject } | Nivel: { data.nivel }</p>
                                <SelectionGroups data={ data } />
                            </div>
                        ))
                    }
                </div>        
            </div>
        </div>
    );
}
 
export default SelectionInscription;